import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ token }) => {
	return (
		<div>
			<h1>Drone Log</h1>
			<nav>
				<Link to='/'>Home Page</Link>
				<Link to='/login'>Login</Link>
				<Link to='/preflights'>Pre-Flight</Link>
				<Link to='/flightlog'>Flight Log</Link>
				<Link to='/recordsearch'>Find a Record</Link>
			</nav>
			{token && <h2>You are now logged in.</h2>}
		</div>
	);
};

export default Header;
