import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
//what is the below code for?
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Show extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDessert: this.props.match.params.title,
			dessert: {}
		};

		//this.setIngredients = this.setIngredients.bind(this);
	}

	//   component did mount method that finds and returns dessert by title from db
	componentDidMount() {
		const dessert = this.state.selectedDessert;
		const url = 'http://localhost:3000/titles/' + dessert;

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
		if (this.state.dessert.items) {
			console.log(this.state.dessert.items);
			var ingredientsList = this.state.dessert.items.map(item => (
				<li>{item}</li>
			));
		}

		if (this.state.dessert.steps) {
			console.log(this.state.dessert.steps);
			var stepsList = this.state.dessert.steps.map(item => <li>{item}</li>);
		}
		return (
			<div className="show-container">
				<div className="show-image-container">
					<img src={this.state.dessert.image} alt="this dessert" />
				</div>
				<div className="show-text-container">
					<h2>{this.state.dessert.title}</h2>
					<p>Category: {this.state.dessert.category}</p>
					<p>Description: {this.state.dessert.description}</p>
					<h5>Ingredients</h5>
					<ul>{this.state.dessert.items && ingredientsList}</ul>
					<h5>Steps to make</h5>
					<ul>{this.state.dessert.steps && stepsList}</ul>
				</div>
				<Link to={`/edit/${this.state.dessert.title}`}>Edit</Link>
				<Link>Delete</Link>
			</div>
		);
	}
}

export default Show;
