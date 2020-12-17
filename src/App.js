import { React, useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import './App.css';

function App() {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState('');
	return (
		<div className='App'>
			<Header token={token} />
			<main>
				<Route
					path='/'
					exact
					render={() => {
						return <Home token={token} />;
					}}
				/>
				<Route
					path='/'
					exact
					render={() => {
						return <Home token={token} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
