import React, { Component } from 'react';
import axios from 'axios';
//what is the below code for?
import { promised } from 'q';
import { Link } from 'react-router-dom';
import Cookies from './Cookies';
import Cakes from './Cakes';
import Candies from './Candies';
import Pastries from './Pastries';
import Pies from './Pies';
import Other from './Others';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			desserts: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3000')
			.then(response => {
				this.setState({
					desserts: response.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		let list = this.state.desserts.map(item => {
			return (
				<Link to={`/titles/${item.title}`} key={item.title}>
					<li>{item.title}</li>
				</Link>
			);
		});
		return (
			<ul>{list}</ul>
			// <div>
			// 	<Cookies />
			// 	<Cakes />
			// 	<Candies/>
			// 	<Pastries/>
			// 	<Pies/>
			// 	<Other/>
			// </div>
		);
	}
}

export default Dashboard;
