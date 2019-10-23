import React, { Component } from 'react';
import axios from 'axios';
import './New.css';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
	const dessert = this.state;
	
    axios
	  .put('https://d-z-desserts.herokuapp.com/edit/' + 
	  this.state._id, dessert)
      .then(res => {
      })
      .catch(err => {
        console.error(err);});
    this.props.history.push('/');
  }

  //   component did mount method that finds and returns dessert by title from db
  componentDidMount() {
    console.log('component mounted');
	const url = 'https://d-z-desserts.herokuapp.com/titles/' + 
	this.props.match.params.title;

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState(response.data);
      })
      .then(response => {
        console.log(this.state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='newContainer'>
        <form onSubmit={this.handleSubmit}>
          <h2>Edit Recipe</h2>
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
            value={this.state.category}
          >
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
          <textarea
            rows="5"
            name="items"
            type="text"
            value={this.state.items}
            onChange={this.handleChange}
          />
          {/* //steps */}
          Steps
          <textarea
            rows="14"
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
          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default Edit;
