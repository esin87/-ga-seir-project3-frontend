import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

class New extends Component {
<<<<<<< HEAD
    handleSubmit(evt){alert ("you are submitting your recipe");
    evt.preventDefault()
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* //title */}
        Title
        <input type="text" name="title" />
        {/* //category */}
        Category
        <select>
          <option value="cakes">Cakes</option>
          <option value="brownies">Brownies</option>git 
          <option value="cookies">Cookies</option>
          <option value="pastries">Pastries</option>
          <option value="pies">Pies</option>
          <option value="candies">Candies</option>
          <option value="other">Other Desserts</option>
        </select>
        {/* //description */}
        Description
        <input type="text" name="description" />
        {/* //items */}
        Items
        <input type="text" name="items" />
        {/* //steps */}
        Steps
        <input type="text" name="steps" />
        {/* //image */}
        Image URL
        <input type="text" name="image" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
=======
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

		axios.post('http://localhost:3000/', dessert).catch(err => {
			console.error(err);
		});
	}

	render() {
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
>>>>>>> 1df978e4740032fd92c6a6df757616bc75dd890c
}

export default New;
