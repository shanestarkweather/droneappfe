import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import APIURL from '../../config';
import Axios from 'axios';

const PreFlightList = ({ token }) => {
	const history = useHistory();
	const [list, setList] = useState(null);
	useEffect(() => {
		Axios({
			url: `${APIURL}preflights/`,
			method: 'GET',
			headers: {
				Authorization: `Token: ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				setList(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (!list) {
		return null;
	}
	return (
		<div>
			<button onClick={() => history.push('/preflights/new')}>
				New Pre-Flight
			</button>
			<div>
				{list.map((preflight) => {
					return (
						<Link to={`/preflights/${preflight.id}`}>
							{preflight.date} {preflight.time} {preflight.location}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default PreFlightList;
