import React, { Component } from 'react';
import axios from 'axios';
import './Show.css';
import { Link } from 'react-router-dom';

class Show extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
		this.state = {
			selectedDessert: this.props.match.params.title,
			dessert: {}
		};

		//this.setIngredients = this.setIngredients.bind(this);
	}
	// Adding Delete
	delete() {
		const dessert = this.state.selectedDessert;
		axios
			.delete('http://localhost:3000/titles/' + dessert)
			.then(console.log('Goodbye'));
		this.props.history.push('/');
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
			//.then(this.setIngredients())
			.catch(err => {
				console.error(err);
			});
	}

	// having a a hard time figuring out how to map over an array that loads after page renders
	//setIngredients() {
	// 	var ingredients = this.state.dessert.items.map(item => {
	// 		return <li>item</li>;
	// 	});
	// 	return ingredients;
	// }

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
					<h5>Category: </h5>
					<p>{this.state.dessert.category}</p>
					<br></br>
					<h5>Description: </h5>
					<p>{this.state.dessert.description}</p>
					<br></br>
					<h5>Ingredients: </h5>
					<ul>{this.state.dessert.items && ingredientsList}</ul>
					<br></br>
					<h5>Steps to make this dessert: </h5>
					<ul>{this.state.dessert.steps && stepsList}</ul>
				</div>
				<section className="smallText">
					Click Edit to save your changes.
				</section>
				<Link to={`/edit/${this.state.dessert.title}`} className="edit">
					Edit
				</Link>
				<></>
				<section className="smallText">
					No take backs. This deletes for real.
				</section>
				<button onClick={this.delete} className="areYouSure">
					Delete
				</button>
			</div>
		);
	}
}

export default Show;
