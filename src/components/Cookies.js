import React, { Component } from 'react';
import './Cookies.css';

class Cookies extends Component{
  render() {
    return(
      <div className='cookieBox'>
        <img className='cookieImage' src={require('../Project-3-Pictures/cookies/chocolatechip.png')} alt='cookies'></img>
        <h3>Cookies</h3>
        
      </div>
    )
  }
}

export default Cookies;