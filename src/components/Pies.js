import React, { Component } from 'react';
import './Pie.css'

class Pies extends Component{
  
  render() {
    return(
      <div>
        <img className='piePic' src={require('../Project-3-Pictures/pies/applepie.png')} alt='apple pie'></img>
        <h3 className='pieWord'>Pies</h3>
      </div>
    )
  }
}

export default Pies;