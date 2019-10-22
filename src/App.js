import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import New from './components/New';
import Show from './components/Show';

function App() {
	return (
		<div>
			<div className="navBox">
				<h1>
					<Link className="logo" to="/">
						Dang-Good Desserts Zone
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link className="navLinks" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="navLinks" to="/create">
								Create Recipe
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<main>
				<Switch>
					<Route path="/" exact={true} component={Dashboard} />
					<Route path="/create" exact={true} component={New} />
					<Route
						exact={true}
						path="/titles/:title"
						render={routerProps => <Show {...routerProps} />}
					/>
					<Redirect to="/recipes" component={Dashboard} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
