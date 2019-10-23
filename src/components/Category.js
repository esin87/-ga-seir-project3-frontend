import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: this.props.match.params.category,
			desserts: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:3000/categories/' + this.state.category)
			.then(response => {
				this.setState({
					desserts: response.data
				});
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		let list = this.state.desserts.map(item => {
			return (
				<li>
					<Link to={`/titles/${item.title}`} key={item.title}>
						{item.title}:
					</Link>{' '}
					{item.description}
				</li>
			);
		});
		return (
			<div>
				<h1>{this.state.category}</h1>
				<ul>{list}</ul>
			</div>
		);
	}
}

export default Category;
