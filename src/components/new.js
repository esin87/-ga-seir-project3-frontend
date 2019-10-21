import React, { Component } from 'react';

class New extends Component {
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
          <option value="brownies">Brownies</option>
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
}

export default New;
