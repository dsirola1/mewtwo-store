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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useCartContext } from '../../utils/_useCart';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
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

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';

	const { state: { totalQuantity } } = useCartContext();
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label='product page' color='inherit'>
					<Link exact to='/'>
						<FormatListBulletedIcon />
					</Link>
				</IconButton>
				<p>Product</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label='show 4 new cart items' color='inherit'>
					<Badge badgeContent={4} color='secondary'>
						<Link to='/checkout'>
							<ShoppingCartIcon />
						</Link>
					</Badge>
				</IconButton>
				<p>Shopping Cart</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<Link to='/account'>
						<AccountCircle />
					</Link>
				</IconButton>
				<p>Profile</p>
			</MenuItem>
			<MenuItem>
				<Link to='/signout'>
					<Signout />
				</Link>
				<p>Shopping Cart</p>
			</MenuItem>
		</Menu>
	);

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
							<Badge badgeContent={totalQuantity} color='secondary'>
								<Link to='/checkout'>
									<ShoppingCartIcon />
								</Link>
							</Badge>
						</IconButton>

						<IconButton color='inherit'>
							<Link to='/account'>
								<AccountCircle />
							</Link>
						</IconButton>

						<Link to='/signout'>
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
			{renderMobileMenu}
		</div>
	);
}
