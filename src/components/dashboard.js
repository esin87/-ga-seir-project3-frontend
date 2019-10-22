import React, { Component } from 'react';
//what is the below code for?
import { promised } from 'q';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Cookies from './Cookies';
import Cakes from './Cakes';
import Candies from './Candies';
import Pastries from './Pastries';
import Pies from './Pies';
import Other from './Others';
import Brownies from './Brownies';
//import Category from './Category';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			desserts: []
		};
	}

	render() {
		return (
			<div>
				<Link to="/categories/Cookies">
					<Cookies />
				</Link>
				<Link to="/categories/Cakes">
					<Cakes />
				</Link>
				<Link to="/categories/Candies">
					<Candies />
				</Link>
				<Link to="/categories/Pastries">
					<Pastries />
				</Link>
				<Link to="/categories/Pies">
					<Pies />
				</Link>
				<Link to="/categories/Brownies">
					<Brownies />
				</Link>
				<Link to="/categories/Other">
					<Other />
				</Link>
			</div>
		);
	}
}

export default Dashboard;
