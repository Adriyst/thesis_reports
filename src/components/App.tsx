import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import OverviewMenu from './OverviewMenu';
import Report from './Report';
import Header from './Header';
import About from './About';

import '../css/App.css';

const App: React.FC = () => {
	return (
		<div className="mainwindow">
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/" exact component={OverviewMenu} />
					<Route path="/report/:id" exact component={Report} />
					<Route path="/about" exact component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
