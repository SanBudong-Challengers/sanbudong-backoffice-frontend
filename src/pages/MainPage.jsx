import React from 'react';

import logo from '../logo.svg';
import '../App.css';

import useStore from '../store/store';

function MainPage() {
	const { count, increaseCount } = useStore();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					<button onClick={increaseCount}>increase</button>
					{count}
				</p>
			</header>
		</div>
	);
}

export default MainPage;
