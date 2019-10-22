import React, { Component } from 'react';

class Pies extends Component{
  
  render() {
    return(
      <div>
        <img src={require('../Project-3-Pictures/pies/applepie.png')} alt='apple pie'></img>
        <h3>Pies</h3>
      </div>
    )
  }
}

export default Pies;