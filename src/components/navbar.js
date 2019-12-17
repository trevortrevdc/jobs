import React from 'react';

import './style.scss';
import logo from '../images/logo.png';

const Navbar = () => (
	<div className="hero-head">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						<img src={logo} alt="Logo" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
