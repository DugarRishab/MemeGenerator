import React, { Component } from 'react';
import "./../App.css";

class Button extends Component {
	state = {} 
	
	render() { 
		const { innerText, onGenerateMeme } = this.props;
		return (
			<button className='btn btn-primary' onClick={() => onGenerateMeme() }> {innerText} </button>
		);
	}
}
 
export default Button;