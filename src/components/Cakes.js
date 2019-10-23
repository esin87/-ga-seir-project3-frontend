import React, { Component } from 'react';
import './Cakes.css'

class Cakes extends Component {
	render() {
		return (
			<div>
				<img className='cakePic'
					src={require('../Project-3-Pictures/cakes/tiramisu.png')}
					alt="cakes"></img>
				<h3 className='cakeWord'>Cakes</h3>
			</div>
		);
	}
}

export default Cakes;
