//imports
import React, { Component } from 'react';
import axios from 'axios';
import './Show.css';
//setting up React components
class Show extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
		this.edit = this.edit.bind(this);
		this.state = {
			selectedDessert: this.props.match.params.title,
			dessert: {}
		};
	}
	// Adding Delete
	delete() {
		axios
			.delete(`https://d-z-desserts.herokuapp.com/${this.state.dessert._id}`)
			.then(console.log('Goodbye' + `${this.state.dessert._id}`));
		this.props.history.push('/');
	}
	// Adding Edit
	edit() {
		const dessert = this.state.selectedDessert;
		axios
			.get('https://d-z-desserts.herokuapp.com/titles/' + dessert)
			.then(console.log('Updated'));
		this.props.history.push(`/edit/${this.state.dessert.title}`);
	}
	//   component did mount method that finds and returns dessert by title from db
	componentDidMount() {
		const dessert = this.state.selectedDessert;
		const url = 'https://d-z-desserts.herokuapp.com/titles/' + dessert;
		axios
			.get(url)
			.then(response => {
				this.setState({ dessert: response.data });
			})
			.catch(err => {
				console.error(err);
			});
	}
	//   this renders the page and returns the result
	render() {
		if (this.state.dessert.items) {
			var ingredientsList = this.state.dessert.items.map((item, index) => (
				<li key={index}>{item}</li>
			));
		}
		if (this.state.dessert.steps) {
			var stepsList = this.state.dessert.steps.map((item, index) => (
				<li key={index}>{item}</li>
			));
		}
		return (
			<div className="show-container">
				<div className="show-image-container">
					<img
						className="showImage"
						src={this.state.dessert.image}
						alt={`This dessert is ${this.state.dessert.title}.`}
					/>
				</div>
				<div className="show-text-container">
					<h2>{this.state.dessert.title}</h2>
					<br></br>
					<h5 >Category: </h5>
					<p className="category">{this.state.dessert.category}</p>
					<br></br>
					<h5>Description: </h5>
					<p className="description">{this.state.dessert.description}</p>
					<br></br>
					<h5>Ingredients: </h5>
					<ul className="IngList">
						{this.state.dessert.items && ingredientsList}
					</ul>
					<br></br>
					<h5>Steps to make this dessert: </h5>
					<ul className="makeIt">
						{this.state.dessert.steps && stepsList}
					</ul>
				</div>
				<section className="smallText">Click Edit to make changes.</section>
				<section className="smallText">
					No take backs. The delete button is for real.
				</section>
				<button onClick={this.edit} className="edit">
					Edit
				</button>
				<button onClick={this.delete} className="areYouSure">
					Delete
				</button>
			</div>
		);
	}
}

export default Show;
