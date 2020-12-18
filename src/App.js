import { React, useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import PreFlightList from './components/PreFlightList/PreFlightList';
import PreFlightDetail from './components/PreFlightDetail/PreFlightDetail';
import PreFlight from './components/PreFlight/PreFlight';

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
					path='/login/'
					exact
					render={() => {
						return <Login setToken={setToken} />;
					}}
				/>
				<Route
					path='/users/'
					exact
					render={(routerProps) => {
						return <SignUp token={token} />;
					}}
				/>
				<Route
					path='/preflights/'
					exact
					render={() => {
						return <PreFlightList token={token} />;
					}}
				/>
				<Route
					path='/preflights/:id/'
					exact
					render={(routerProps) => {
						return <PreFlightDetail token={token} match={routerProps.match} />;
					}}
				/>
				<Route
					path='/preflights/new/'
					exact
					render={(routerProps) => {
						return <PreFlight token={token} />;
					}}
				/>
			</main>
		</div>
	);
}

export default App;
