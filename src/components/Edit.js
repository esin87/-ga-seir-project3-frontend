import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDessert: this.props.match.params.title,
			dessert: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({
			dessert: {
				[evt.target.name]: evt.target.value
			}
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();

		const dessert = {
			title: this.state.dessert.title,
			category: this.state.dessert.category,
			description: this.state.dessert.description,
			items: [this.state.dessert.items],
			steps: [this.state.dessert.steps],
			image: this.state.dessert.image
		};

		console.log(dessert);

		axios
			.put(`http://localhost:3000/${dessert.title}`, dessert)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => {
				console.error(err);
			});
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

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Edit Recipe</h2>
					{/* //title */}
					Title
					<input
						name="title"
						type="text"
						value={this.state.dessert.title}
						onChange={this.handleChange}
					/>
					{/* //category */}
					Category
					<select
						name="category"
						onChange={this.handleChange}
						value={this.state.dessert.category}>
						<option value="Cakes">Cakes</option>
						<option value="Brownies">Brownies</option>
						<option value="Cookies">Cookies</option>
						<option value="Pastries">Pastries</option>
						<option value="Pies">Pies</option>
						<option value="Candies">Candies</option>
						<option value="Other">Other Desserts</option>
					</select>
					{/* //description */}
					Description
					<input
						name="description"
						type="text"
						value={this.state.dessert.description}
						onChange={this.handleChange}
					/>
					{/* //items */}
					Items
					<textarea
						rows="5"
						name="items"
						type="text"
						value={this.state.dessert.items}
						onChange={this.handleChange}
					/>
					{/* //steps */}
					Steps
					<textarea
						rows="14"
						name="steps"
						type="text"
						value={this.state.dessert.steps}
						onChange={this.handleChange}
					/>
					{/* //image */}
					Image URL
					<input
						name="image"
						type="text"
						value={this.state.dessert.image}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Update" />
				</form>
			</div>
		);
	}
}

export default Edit;
