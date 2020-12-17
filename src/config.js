const APIURL =
	process.env.NODE_ENV === 'production'
		? 'https://drone-log-be.herokuapp.com/'
		: 'http://localhost:8000/';

export default APIURL;
