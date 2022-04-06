import React, { Component } from 'react';
import "./../App.css";

class Header extends Component {
	state = {  } 
	render() { 
		return (
			<header className="header">
				<h2 className="title">MEME GENERATOR</h2>
				<h2 className="sub-title">Rishab Dugar</h2>
			</header>
		);
	}
}
 

export default Header;