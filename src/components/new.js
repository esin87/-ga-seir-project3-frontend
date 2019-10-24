import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

//learned form validation in React: https://goshakkk.name/instant-form-fields-validation-react/

function validate(title, description, items, steps) {
	return {
		title: title.length === 0,
		description: description.length === 0,
		items: items.length === 0,
		steps: steps.length === 0
	};
}

class New extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			category: 'Other',
			description: '',
			items: '',
			steps: '',
			image: '',
			touched: {
				title: false,
				description: false,
				items: false,
				steps: false
			}
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

		let arrayifiedItems = this.state.items.split('**');
		let arrayifiedSteps = this.state.steps.split('**');

		const dessert = {
			title: this.state.title,
			category: this.state.category,
			description: this.state.description,
			items: arrayifiedItems,
			steps: arrayifiedSteps,
			image: this.state.image
		};

		axios
			.post('https://d-z-desserts.herokuapp.com/create', dessert)
			.catch(err => {
				console.error(err);
			});

		this.props.history.push({
			pathname: `/titles/${dessert.title}`
		});
	}

	handleBlur = field => evt => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		});
	};

	render() {
		const shouldMarkError = field => {
			const hasError = errors[field];
			const shouldShow = this.state.touched[field];

			return hasError ? shouldShow : false;
		};

		const errors = validate(
			this.state.title,
			this.state.description,
			this.state.items,
			this.state.steps
		);

		const isEnabled = !Object.keys(errors).some(x => errors[x]);

		return (
			<div className="newContainer">
				<div className="insideContainer">
					<form onSubmit={this.handleSubmit}>
						<h2>Create New Recipe</h2>
						{/* //title */}
						Title
						<input
							className={shouldMarkError('title') ? 'error' : ''}
							onBlur={this.handleBlur('title')}
							name="title"
							type="text"
							value={this.state.title}
							onChange={this.handleChange}
							placeholder="Enter title"
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
							className={shouldMarkError('description') ? 'error' : ''}
							onBlur={this.handleBlur('description')}
							name="description"
							type="text"
							value={this.state.description}
							onChange={this.handleChange}
							placeholder="Enter description"
						/>
						{/* //items */}
						Items
						<br></br>
						<h6>(Separate items with **)</h6>
						<textarea
							rows="7"
							className={shouldMarkError('items') ? 'error' : ''}
							onBlur={this.handleBlur('items')}
							name="items"
							type="text"
							value={this.state.items}
							onChange={this.handleChange}
							placeholder="Enter ingredients, e.g., Eggs ** Milk ** Flour"
						/>
						{/* //steps */}
						Steps<br></br>
						<h6>(Separate steps with **)</h6>
						<textarea
							rows="14"
							className={shouldMarkError('steps') ? 'error' : ''}
							onBlur={this.handleBlur('steps')}
							name="steps"
							type="text"
							value={this.state.steps}
							onChange={this.handleChange}
							placeholder="Enter recipe steps, e.g., 1. Combine dry ingredients in a bowl. ** 2. Combine wet ingredients"
						/>
						{/* //image */}
						Image URL
						<input
							name="image"
							type="text"
							value={this.state.image}
							onChange={this.handleChange}
							placeholder="Enter image URL"
						/>
						<input type="submit" value="Submit" disabled={!isEnabled} />
						<p>*All fields required except image.</p>
					</form>
				</div>
			</div>
		);
	}
}

export default New;
