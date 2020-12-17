const APIURL =
	process.env.NODE_ENV === 'production'
		? 'https://drone-log-be.herokuapp.com/'
		: 'https://drone-log-be.herokuapp.com/';

export default APIURL;
