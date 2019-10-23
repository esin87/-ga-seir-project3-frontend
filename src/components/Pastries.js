import React, { Component } from 'react';
import './Pastries.css';

class Pastries extends Component {
	render() {
		return (
			<div>
				<img className='pastryPic'
					src={require('../Project-3-Pictures/pastries/donuts.png')}
					alt="donuts"></img>
				<h3>Pastries</h3>
			</div>
		);
	}
}

export default Pastries;
