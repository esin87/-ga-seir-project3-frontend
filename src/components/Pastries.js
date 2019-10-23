import React, { Component } from 'react';

class Pastries extends Component {
	render() {
		return (
			<div>
				<img
					src={require('../Project-3-Pictures/pastries/donuts.png')}
					alt="donuts"></img>
				<h3>Pastries</h3>
			</div>
		);
	}
}

export default Pastries;
