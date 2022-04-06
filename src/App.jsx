import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import axios from "axios";
import Img from "./components/Img";

class App extends Component {
	state = {
		img: {},
		topText: "",
		bottomText: ""
	};
	handleGenerateMeme = async () => {
		try {
			console.log("Generating Meme");
			const res = await axios.get("https://api.imgflip.com/get_memes");
			if (res.data.success === true) {
				console.log("sending second request");
				const imgArray = res.data.data.memes;
				const img = imgArray[this.randomNumber()];
				this.setState({ img });
			}
		} catch (err) {
			console.log("error: ", err);
		}
	};
	randomNumber = () => {
		return Math.floor(Math.random() * 100);
	};
	handleInput = (event, id) => {
		//console.log("input detected ->", event.target.value, " in ",  id);
		if (id === "top-text") {
			const topText = event.target.value;
			this.setState({ topText });
		} else {
			const bottomText = event.target.value;
			this.setState({ bottomText });
		}
		
	}
	render() {
		return (
			<div className="outer-container">
				<Header></Header>
				<Meme onGenerateMeme={this.handleGenerateMeme} onInput={this.handleInput}></Meme>
				<Img img={this.state.img} topText={this.state.topText} bottomText={this.state.bottomText}></Img>
			</div>
		);
	}
}

export default App;
