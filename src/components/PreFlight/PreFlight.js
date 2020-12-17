import React, { useState, useEffect } from 'react';
import APIURL from '../../config';
import axios from 'axios';
import './PreFlight.css';

const PreFlight = ({ token }) => {
    
	return (
		<div>
			<form onSubmit={handleSubmit} className='preflight-form'>
				<label htmlFor='pilot'>Pilot:</label>
				<input
					onChange={handleChange}
					name='pilot'
					id='pilot'
					value={detail.pilot}
					placeholder='Pilot'
				/>
				<label htmlFor='date'>Date:</label>
				<input
					onChange={handleChange}
					name='date'
					id='date'
					value={detail.date}
					placeholder='Date'
				/>
				<label htmlFor='time'>Time:</label>
				<input
					onChange={handleChange}
					name='time'
					id='time'
					value={detail.time}
					placeholder='Time'
				/>
				<label htmlFor='location'>Location:</label>
				<input
					onChange={handleChange}
					name='location'
					id='location'
					value={detail.location}
					placeholder='Location'
				/>
				<label htmlFor='drone_reg'>Drone Registration:</label>
				<input
					onChange={handleChange}
					name='drone_reg'
					id='drone_reg'
					value={detail.drone_reg}
					placeholder='Drone Registration'
				/>
				<label htmlFor='weather'>Weather:</label>
				<input
					onChange={handleChange}
					name='weather'
					id='weather'
					value={detail.weather}
					placeholder='Weather'
				/>
				<label htmlFor='obstructions'>Obstructions:</label>
				<input
					onChange={handleChange}
					name='obstructions'
					id='obstructions'
					value={detail.obstructions}
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
			</form>
		</div>
	);
};

export default PreFlight;
