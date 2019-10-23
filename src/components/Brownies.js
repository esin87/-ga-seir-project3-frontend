import React, { Component } from 'react';
import './Brownies.css';

class Brownies extends Component{
  
  render() {
    return(
      <div className='cookieBox'>
        <img className='browniePic' src={require('../Project-3-Pictures/brownies/brownie.png')} alt='brownies'></img>
        <h3>Brownies</h3>
      </div>
    )
  }
}

export default Brownies;