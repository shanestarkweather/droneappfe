const APIURL =
	process.env.NODE_ENV === 'production'
		? 'https://dirtyyuppie.com/'
		: 'http://localhost:8000/';

export default APIURL;
