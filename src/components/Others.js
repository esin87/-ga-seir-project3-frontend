import React, { Component } from 'react';
import './Others.css'

class Other extends Component{
  
  render() {
    return(
      <div>
        <img className='otherPic' src={require('../Project-3-Pictures/others/other.png')} alt='other'></img>
        <h3 className='otherWord'>Other</h3>
      </div>
    )
  }
}

export default Other;