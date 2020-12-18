import React, { useState, useEffect } from 'react';
import './PreFlightDetail.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import APIURL from '../../config';

const PreFlightDetail = ({ match }) => {
	const history = useHistory();
	const [detail, setDetail] = useState(null);
	const token = localStorage.getItem('token');
	useEffect(() => {
		Axios({
			url: `${APIURL}preflights/${match.params.id}`,
			method: 'GET',
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then((res) => {
				console.log(res);
				setDetail(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: `${APIURL}preflights/${match.params.id}/`,
			method: 'PUT',
			headers: { Authorization: `Token ${token}` },
			data: detail,
		}).then(() => {
			history.push('/');
		});
	};

	const handleDelete = (event) => {
		Axios({
			url: `${APIURL}preflights/${match.params.id}/`,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${token}`,
			},
		})
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (event) => {
		event.persist();
		setDetail({ ...detail, [event.target.date]: event.target.value });
	};
	if (!detail) {
		return null;
	}
	return (
		<div>
			<div>
				<h2>
					Pre-Flight Log from {detail.time} on {detail.date}{' '}
				</h2>
				<p>Location: {detail.location}</p>
				<p>Drone Registration Number: {detail.drone_reg}</p>
				<p>Weather: {detail.weather}</p>
				<p>Obstructions: {detail.obstructions}</p>
				<p>Takeoff Area Clear: {detail.takeoff_clear}</p>

				<form onSubmit={handleSubmit} className='preflight-form'>
					<div className='date-holder'>
						<label htmlFor='date'>Date: </label>
						<input
							onChange={handleChange}
							name='date'
							id='date'
							value={detail.date}
							placeholder='Date'
						/>
					</div>
					<div className='info'>
						<div className='form-input'>
							<label htmlFor='pilot'>Pilot:</label>
							<input
								onChange={handleChange}
								name='pilot'
								id='pilot'
								value={detail.pilot}
								placeholder='Pilot'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='time'>Time:</label>
							<input
								onChange={handleChange}
								name='time'
								id='time'
								value={detail.time}
								placeholder='Time'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='location'>Location:</label>
							<input
								onChange={handleChange}
								name='location'
								id='location'
								value={detail.location}
								placeholder='Location'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='drone_reg'>Drone Registration:</label>
							<input
								onChange={handleChange}
								name='drone_reg'
								id='drone_reg'
								value={detail.drone_reg}
								placeholder='Drone Registration'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='weather'>Weather:</label>
							<input
								onChange={handleChange}
								name='weather'
								id='weather'
								value={detail.weather}
								placeholder='Weather'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='obstructions'>Obstructions:</label>
							<input
								onChange={handleChange}
								name='obstructions'
								id='obstructions'
								value={detail.obstructions}
								placeholder='Obstructions'
							/>
						</div>
						<div className='form-input'>
							<label htmlFor='takeoff_clear'>Takeoff Area Clear:</label>
							<input
								onChange={handleChange}
								type='checkbox'
								name='takeoff_clear'
								id='takeoff_clear'
								value={true}
								placeholder='Takeoff Area Clear'
							/>
						</div>
					</div>
					<button type='submit'>Update Log</button>
				</form>
				<button onClick={handleDelete}>Delete This Log</button>
			</div>
		</div>
	);
};

export default PreFlightDetail;
