import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ token }) => {
	return (
		<div className='header'>
			<h1>
				<Link to='/'>Drone Log</Link>
			</h1>
			<nav>
				<Link to='/login/'>Login</Link>
				<br />
				<Link to='/users/'>Sign Up</Link>
				<br />
				<Link to='/preflights/'>Existing Pre-Flights</Link>
				<br />
				<Link to='/preflights/new/'>New Pre-Flight</Link>
				<br />
			</nav>
			{token && <h2>You are now logged in.</h2>}
		</div>
	);
};

export default Header;
