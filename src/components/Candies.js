import React, { Component } from 'react';
import './Candies.css';

class Candies extends Component{
  
  render() {
    return(
      <div className='candyPic'>
        <img src={require('../Project-3-Pictures/candies/kitkat.png')} alt='candies'></img>
        <h3>Candies</h3>
      </div>
    )
  }
}

export default Candies;