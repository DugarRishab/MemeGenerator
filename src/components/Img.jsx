import React, { Component } from 'react';
import './../App.css';

class Img extends Component {
	state = {  } 
	render() { 
		const { img, topText, bottomText } = this.props;
		return (
			<div className='meme-box'>
				<h1 className="top-text" draggable>{ topText }</h1>
				<img className="meme-img" src={img.url} alt="" />
				<h1 className="bottom-text" draggable>{ bottomText }</h1>
			</div>
		);
	}
}
 
export default Img;