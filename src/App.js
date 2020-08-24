import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Dots from './pages/BoxDots';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/dots" exact component={Dots} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
