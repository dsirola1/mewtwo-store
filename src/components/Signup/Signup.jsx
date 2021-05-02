import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../routes/useAuth';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // react hooks
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const history = useHistory();

  const handleSignup = async () => {
    try {
      const res = await axios.post('/user/signup', {
        firstname,
        lastname,
        email,
        password,
      });
      console.log('Signed Up ---> res.data ---> ', res.data);
      auth.signup(res.data.id, res.data.email, res.data.firstname, () =>
        history.push('/')
      );
    } catch (error) {
      if (error.response.status === 401) {
        history.push('/signin');
      }
      console.log(
        'Error in handleSubmit of Signup component:',
        error.response.data.err
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="First Name"
                value={firstname}
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
                required
                autoComplete="fname"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                value={lastname}
                type="text"
                onChange={(e) => setLastname(e.target.value)}
                required
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Address"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright © mewtwo-store {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
}
