import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

class New extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: '',
			description: '',
			items: [],
			steps: [],
			image: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();

		const dessert = {
			title: this.state.title,
			category: this.state.category,
			description: this.state.description,
			items: [this.state.items],
			steps: [this.state.steps],
			image: this.state.image
		};

		console.log(dessert);

		axios.post('http://localhost:3000/create', dessert).catch(err => {
			console.error(err);
		});

		this.props.history.push({
			pathname: '/'
		});
	}

	render() {
		console.log(this.props.history.push);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Create New Recipe</h2>
					{/* //title */}
					Title
					<input
						name="title"
						type="text"
						value={this.state.title}
						onChange={this.handleChange}
					/>
					{/* //category */}
					Category
					<select
						name="category"
						onChange={this.handleChange}
						value={this.state.category}>
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
						value={this.state.description}
						onChange={this.handleChange}
					/>
					{/* //items */}
					Items
					<input
						name="items"
						type="text"
						value={this.state.items}
						onChange={this.handleChange}
					/>
					{/* //steps */}
					Steps
					<input
						name="steps"
						type="text"
						value={this.state.steps}
						onChange={this.handleChange}
					/>
					{/* //image */}
					Image URL
					<input
						name="image"
						type="text"
						value={this.state.image}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default New;
