import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

class New extends Component {
<<<<<<< HEAD
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
=======
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: 'Cakes',
			description: '',
			items: [],
			steps: [],
			image: ''
		};
>>>>>>> c69a9fb3bff0aa062d2ff441dbdd90c7808bf629

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

<<<<<<< HEAD
        console.log(dessert);

        axios.post('http://localhost:3000/create', dessert).catch(err => {
            console.error(err);
        });
=======
		axios.post('http://localhost:3000/create', dessert).catch(err => {
			console.error(err);
		});
>>>>>>> c69a9fb3bff0aa062d2ff441dbdd90c7808bf629

        this.props.history.push({
            pathname: '/'
        });
    }

<<<<<<< HEAD
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            h2 > Create New Recipe < /h2> { /* //title */ }
            Title <
            input name = "title"
            type = "text"
            value = { this.state.title }
            onChange = { this.handleChange }
            /> { /* //category */ }
            Category <
            select name = "category"
            onChange = { this.handleChange }
            value = { this.state.category } >
            <
            option value = "cakes" > Cakes < /option> <
            option value = "brownies" > Brownies < /option> <
            option value = "cookies" > Cookies < /option> <
            option value = "pastries" > Pastries < /option> <
            option value = "pies" > Pies < /option> <
            option value = "candies" > Candies < /option> <
            option value = "other" > Other Desserts < /option> <
            /select> { /* //description */ }
            Description <
            input name = "description"
            type = "text"
            value = { this.state.description }
            onChange = { this.handleChange }
            /> { /* //items */ }
            Items <
            input name = "items"
            type = "text"
            value = { this.state.items }
            onChange = { this.handleChange }
            /> { /* //steps */ }
            Steps <
            input name = "steps"
            type = "text"
            value = { this.state.steps }
            onChange = { this.handleChange }
            /> { /* //image */ }
            Image URL <
            input name = "image"
            type = "text"
            value = { this.state.image }
            onChange = { this.handleChange }
            /> <
            input type = "submit"
            value = "Submit" / >
            <
            /form> <
            /div>
        );
    }
=======
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
>>>>>>> c69a9fb3bff0aa062d2ff441dbdd90c7808bf629
}

export default New;