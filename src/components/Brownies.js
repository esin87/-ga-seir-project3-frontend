import React, { Component } from 'react';

class Brownies extends Component{
  
  render() {
    return(
      <div className='cookieBox'>
        <img src={require('../Project-3-Pictures/brownies/brownie.png')} alt='brownies'></img>
        <h3>Brownies</h3>
      </div>
    )
  }
}

export default Brownies;