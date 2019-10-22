import React, { Component } from 'react';
import axios from 'axios';
import { promised } from 'q';
import { Link } from 'react-router-dom';

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
		return <ul>{list}</ul>;
	}
}

export default Dashboard;
