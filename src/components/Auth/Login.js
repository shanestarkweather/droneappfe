import React, { useState } from 'react';
import './Auth.css';
import APIURL from '../../config';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ setToken }) => {
	const signin = {
		email: '',
		password: '',
	};
	const [redirect, setRedirect] = useState(false);
	const [formState, setFormState] = useState(signin);
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormState(signin);
		Axios({
			url: `${APIURL}token/login/`,
			method: 'POST',
			data: formState,
		}).then((res) => {
			setToken(res.data.auth_token);
			localStorage.setItem('token', res.data.auth_token);
			setRedirect(true);
		});
	};
	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<p className='login-message'>Please enter your email and password.</p>
			<form onSubmit={handleSubmit} className='auth-body'>
				<label htmlFor='email'>Email Address: </label>
				<div className='form-component'>
					<input
						required
						onChange={handleChange}
						type='email'
						name='email'
						id='email'
						placeholder='valid email address'
						value={formState.email}
					/>
				</div>
				<br />
				<label htmlFor='password'>Password: </label>
				<div className='form-component'>
					<input
						required
						onChange={handleChange}
						type='password'
						name='password'
						id='password'
						placeholder='enter password'
						value={formState.password}
					/>
				</div>
				<br />

				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
