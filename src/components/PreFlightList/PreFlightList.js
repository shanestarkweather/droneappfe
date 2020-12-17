import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIURL from '../../config';
import Axios from 'axios';

const PreFlightList = ({ token }) => {
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
				console.log(res);
				setList(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
    }, []);
    if (!list){
        return null
    }
	return (
    <div>
        {list.map((preflight) => {
            return (
                <Link to={`/preflights/${preflight.id}`}>{preflight.date} {preflight.time} {preflight.location}</Link>
            )
        })}
    </div>)
};

export default PreFlightList;
