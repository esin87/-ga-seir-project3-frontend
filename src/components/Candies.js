import React, { Component } from 'react';

class Candies extends Component{
  
  render() {
    return(
      <div>
        <img src={require('../Project-3-Pictures/candies/kitkat.png')} alt='candies'></img>
        <h3>Candies</h3>
      </div>
    )
  }
}

export default Candies;