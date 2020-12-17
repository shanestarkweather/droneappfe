import React from 'react';
import Axios from 'axios';
import APIURL from '../../config';
import './FlightLog.css';
import { useHistory } from 'react-router-dom';

const FlightLog = ({ match, token }) => {
	return (
		<div>
			<form onSubmit={handleSubmit} className='update-form'>
				<label htmlFor='duration'>Duration:</label>
				<input
					onChange={handleChange}
					name='duration'
					id='duration'
					value={detail.duration}
					placeholder='Duration'
				/>
				<label htmlFor='incidents'>Incidents:</label>
				<input
					onChange={handleChange}
					name='incidents'
					id='incidents'
					value={detail.incidents}
					placeholder='Incidents'
				/>
			</form>
		</div>
	);
};

export default FlightLog;
