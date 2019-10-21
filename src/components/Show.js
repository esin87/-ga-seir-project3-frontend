import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dessert: {}
		};
	}

	//   component did mount method that finds and returns dessert by title from db
	componentDidMount() {
		const dessert = this.props.match.params.title;
		const url = 'http://localhost:3000/' + dessert;

		axios
			.get(url)
			.then(response => {
				this.setState({ dessert: response.data });
			})
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		return (
			<div className="show-container">
				<div className="show-image-container">
					<img src={this.state.dessert.image} alt="this dessert" />
				</div>
				<div className="show-text-container">
					<h2>{this.state.dessert.title}</h2>
					<p>{this.state.dessert.category}</p>
					<p>{this.state.dessert.description}</p>
					<h5>Recipe</h5>
					<p>Ingredients in progress</p>
					<p>Steps to make</p>
				</div>
			</div>
		);
	}
}

export default Show;
