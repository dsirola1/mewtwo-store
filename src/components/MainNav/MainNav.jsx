import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';

export default function MainNav() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to='/signin' activeClassName='active'>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/' activeClassName='active'>
							PRODUCTS
						</NavLink>
					</li>
					<li>
						<NavLink to='/detail/:id' activeClassName='active'>
							CART
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/signup' activeClassName='active'>
							USER
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
