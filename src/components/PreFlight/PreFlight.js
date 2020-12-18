import React, { useState } from 'react';
import APIURL from '../../config';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './PreFlight.css';

const PreFlight = () => {
	const history = useHistory();
	const token = localStorage.getItem('token');
	const [newPreFlight, setNewPreFlight] = useState({
		pilot: '',
		date: '',
		time: '',
		location: '',
		drone_reg: '',
		weather: '',
		obstructions: '',
		takeoff_clear: 'false',
	});

	const handleChange = (event) => {
		event.persist();
		setNewPreFlight({
			...newPreFlight,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: `${APIURL}preflights/`,
			method: 'POST',
			headers: {
				Authorization: `Token ${token}`,
			},
			data: newPreFlight,
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='preflight-form'>
				<label htmlFor='pilot'>Pilot:</label>
				<input
					onChange={handleChange}
					name='pilot'
					id='pilot'
					value={newPreFlight.pilot}
					placeholder='Pilot'
				/>
				<label htmlFor='date'>Date:</label>
				<input
					onChange={handleChange}
					name='date'
					id='date'
					value={newPreFlight.date}
					placeholder='Date'
				/>
				<label htmlFor='time'>Time:</label>
				<input
					onChange={handleChange}
					name='time'
					id='time'
					value={newPreFlight.time}
					placeholder='Time'
				/>
				<label htmlFor='location'>Location:</label>
				<input
					onChange={handleChange}
					name='location'
					id='location'
					value={newPreFlight.location}
					placeholder='Location'
				/>
				<label htmlFor='drone_reg'>Drone Registration:</label>
				<input
					onChange={handleChange}
					name='drone_reg'
					id='drone_reg'
					value={newPreFlight.drone_reg}
					placeholder='Drone Registration'
				/>
				<label htmlFor='weather'>Weather:</label>
				<input
					onChange={handleChange}
					name='weather'
					id='weather'
					value={newPreFlight.weather}
					placeholder='Weather'
				/>
				<label htmlFor='obstructions'>Obstructions:</label>
				<input
					onChange={handleChange}
					name='obstructions'
					id='obstructions'
					value={newPreFlight.obstructions}
					placeholder='Obstructions'
				/>
				<label htmlFor='takeoff_clear'>Takeoff Area Clear:</label>
				<input
					onChange={handleChange}
					type='checkbox'
					name='takeoff_clear'
					id='takeoff_clear'
					value={true}
					placeholder='Takeoff Area Clear'
				/>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
};

export default PreFlight;
