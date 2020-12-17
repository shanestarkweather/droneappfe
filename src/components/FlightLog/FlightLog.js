import React from 'react';
import Axios from 'axios';
import APIURL from '../../config';
import './FlightLog.css';
import { useHistory } from 'react-router-dom';

const FlightLog = ({ match, token }) => {
	return (
	<div>
		<form onSubmit={handleSubmit} className='update-form'>
			
		</form>
	</div>
	);
};

export default FlightLog;
