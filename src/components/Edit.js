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
						<option value="cakes">Cakes</option>
						<option value="brownies">Brownies</option>
						<option value="cookies">Cookies</option>
						<option value="pastries">Pastries</option>
						<option value="pies">Pies</option>
						<option value="candies">Candies</option>
						<option value="other">Other Desserts</option>
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
					<input
						name="items"
						type="text"
						value={this.state.dessert.items}
						onChange={this.handleChange}
					/>
					{/* //steps */}
					Steps
					<input
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
