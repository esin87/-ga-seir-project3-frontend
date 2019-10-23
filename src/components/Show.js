import React, { Component } from 'react';
import axios from 'axios';
import './Show.css';
import { Link } from 'react-router-dom';

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
		const dessert = this.state.selectedDessert;
		axios
			.delete('https://d-z-desserts.herokuapp.com/titles/' + dessert)
			.then(console.log('Goodbye'));
		this.props.history.push('/');
	}
	// Adding Edit
	edit() {
		const dessert = this.state.selectedDessert;
		axios
			.get('https://d-z-desserts.herokuapp.com/titles/' + dessert)
			.then(console.log('Updated'));
		this.props.history.push('/edit/${this.state.dessert.title}');
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
					<img className='showImage' src={this.state.dessert.image} alt="this dessert" />
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
				<button onClick={this.edit} className="edit">
					Edit
				</button>
				{/* <Link to={`/edit/${this.state.dessert.title}`} className="edit">
					Edit
				</Link> */}
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
