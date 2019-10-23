import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import New from './components/new';
=======
import New from './components/new.js';
>>>>>>> c69a9fb3bff0aa062d2ff441dbdd90c7808bf629
import Show from './components/Show';
import Edit from './components/Edit';
import Category from './components/Category';


function App() {
<<<<<<< HEAD
    return ( <
            div >
            <
            div className = "navBox" >
            <
            h1 >
            <
            Link className = "logo"
            to = "/" >
            Dang - Good Desserts Zone <
            /Link> <
            /h1> <
            nav >
            <
            ul >
            <
            li >
            <
            Link className = "navLinks"
            to = "/" >
            Home <
            /Link> <
            /li> <
            li >
            <
            Link className = "navLinks"
            to = "/create" >
            Create Recipe <
            /Link> <
            /li> <
            /ul> <
            /nav> <
            /div> <
            main >
            <
            Switch >
            <
            Route path = "/"
            exact = { true }
            component = { Dashboard }
            /> <
            Route path = "/create"
            exact = { true }
            component = { New }
            /> <
            Route exact = { true }
            path = "/titles/:title"
            render = {
                routerProps => < Show {...routerProps }
                />} /
                >
                <
                Route
                exact = { true }
                path = "/edit/:title"
                render = {
                    routerProps => < Edit {...routerProps }
                    />} /
                    >
                    <
                    Redirect to = "/recipes"
                    component = { Dashboard }
                    /> <
                    /Switch> <
                    /main> <
                    /div>
                );
            }
=======
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
					<Route
						exact={true}
						path="/edit/:title"
						render={routerProps => <Edit {...routerProps} />}
					/>
					<Route
						exact={true}
						path="/categories/:category"
						render={routerProps => <Category {...routerProps} />}
					/>
					<Redirect to="/" component={Dashboard} />
				</Switch>
			</main>
		</div>
	);
}
>>>>>>> c69a9fb3bff0aa062d2ff441dbdd90c7808bf629

            export default App;