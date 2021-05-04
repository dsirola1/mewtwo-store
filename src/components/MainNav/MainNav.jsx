import React from 'react';
import { Link } from 'react-router-dom';
import Signout from '../MainNav/Signout';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function MainNav() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link exact to="/">
            <Typography variant="h6" noWrap component="div">
              MEWTWO
            </Typography>
          </Link>

          <Box>
            <Link exact to="/">
              <IconButton color="inherit">
                <FormatListBulletedIcon />
              </IconButton>
            </Link>

            <Link to="/checkout">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link exact to="/account">
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </Link>

            <Link exact to="/signout">
              <Signout />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
