import React, { useState } from 'react';
import './Auth.css';
import Axios from 'axios';
import APIURL from '../../config';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
	const signup = {
		username: '',
		first_name: '',
		last_name: '',
		faa_license: '',
		password: '',
		password2: '',
		errors: {},
	};
	const [passwordError, setPasswordError] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [joinState, setJoinState] = useState(signup);
	const handleChange = (event) => {
		event.persist();
		setJoinState({ ...joinState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setJoinState(signup);
		if (joinState.password === joinState.password2) {
			Axios({
				url: `${APIURL}users/`,
				method: 'POST',
				data: joinState,
			}).then((res) => {
				console.log(res);
				setRedirect(true);
			});
		} else {
			setPasswordError(true);
		}
	};

	if (redirect) {
		return <Redirect to='/login' />;
	}
	return (
		<div>
			<p className='sign-up'>Sign up for an account to log flights!</p>
			<form onSubmit={handleSubmit} className='auth-body'>
				<div className='form-component'>
					<label htmlFor='email'>Email: </label>
					<input
						required
						type='email'
						id='email'
						value={joinState.email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='first_name'>First Name: </label>
					<input
						required
						type='first_name'
						id='first_name'
						value={joinState.first_name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='last_name'>Last Name: </label>
					<input
						required
						type='last_name'
						id='last_name'
						value={joinState.last_name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='faa_license'>FAA License: </label>
					<input
						required
						type='faa_license'
						id='faa_license'
						value={joinState.faa_license}
						onChange={handleChange}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password'>Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password'
						value={joinState.password}
					/>
				</div>
				<div className='form-component'>
					<label htmlFor='password2'>Confirm Password: </label>
					<input
						required
						onChange={handleChange}
						type='password'
						id='password2'
						value={joinState.password2}
					/>
				</div>
				<button type='submit' className='pretty-button'>
					Sign up
				</button>
				{passwordError && <h3>Passwords must match.</h3>}
			</form>
		</div>
	);
};

export default SignUp;
