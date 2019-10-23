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
//this is the correct file
class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			desserts: []
		};
	}

	render() {
		return (
			<div className="dashContainer">
				<div className="cookie">
					<Link to="/categories/Cookies">
						<Cookies className="test" />
					</Link>
				</div>
				<div className="cake">
					<Link to="/categories/Cakes">
						<Cakes />
					</Link>
				</div>
				<div className="candies">
					<Link to="/categories/Candies">
						<Candies />
					</Link>
				</div>
				<div className="pastries">
					<Link to="/categories/Pastries">
						<Pastries />
					</Link>
				</div>
				<div className="pies">
					<Link to="/categories/Pies">
						<Pies />
					</Link>
				</div>
				<div className="brownies">
					<Link to="/categories/Brownies">
						<Brownies />
					</Link>
				</div>
				<div className="other">
					<Link to="/categories/Other">
						<Other />
					</Link>
				</div>
			</div>
		);
	}
}

export default Dashboard;
