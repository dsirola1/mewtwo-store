import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Signout from '../MainNav/Signout';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MainNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            <Link exact to='/'>
              MEWTWO
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color='inherit'>
              <Link exact to='/'>
                <FormatListBulletedIcon />
              </Link>
            </IconButton>

            <IconButton color='inherit'>
              <Link to='/checkout'>
                <Badge badgeContent={4} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>

            <IconButton color='inherit'>
              <Link exact to='/account'>
                <AccountCircle />
              </Link>
            </IconButton>

            <Link exact to='/signout'>
              <Signout />
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
