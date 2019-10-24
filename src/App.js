import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import { Route, Switch, Link } from 'react-router-dom';
import New from './components/new.js';
import Show from './components/Show';
import Edit from './components/Edit';
import Category from './components/Category';
import TeamAbout from './components/TeamAbout';

function App() {
	return (
		<div>
			<div className="navBox">
				<h1>
					<Link className="logo" to="/about">
						Dang - Good Desserts Zone{' '}
					</Link>{' '}
				</h1>{' '}
				<nav>
					<ul>
						<li>
							<Link className="navLinks" to="/">
								Home{' '}
							</Link>{' '}
						</li>{' '}
						<li>
							<Link className="navLinks" to="/create">
								Create Recipe{' '}
							</Link>{' '}
						</li>{' '}
					</ul>{' '}
				</nav>{' '}
			</div>{' '}
			<main>
				<Switch>
					<div>
						<div className="appMain">
							<Route
								path={process.env.PUBLIC_URL + '/'}
								exact={true}
								component={Dashboard}
							/>{' '}
						</div>{' '}
						<Route
							exact={true}
							path={process.env.PUBLIC_URL + '/about'}
							component={TeamAbout}
						/>{' '}
						<Route
							path={process.env.PUBLIC_URL + '/create'}
							exact={true}
							component={New}
						/>{' '}
						<Route
							exact={true}
							path={process.env.PUBLIC_URL + '/titles/:title'}
							render={routerProps => <Show {...routerProps} />}
						/>
						<Route
							exact={true}
							path={process.env.PUBLIC_URL + '/edit/:title'}
							render={routerProps => <Edit {...routerProps} />}
						/>
						<Route
							exact={true}
							path={process.env.PUBLIC_URL + '/categories/:category'}
							render={routerProps => <Category {...routerProps} />}
						/>
					</div>{' '}
				</Switch>{' '}
			</main>{' '}
		</div>
	);
}

export default App;
