import React, { Component } from "react";
import "./../App.css";

class InputField extends Component {
	state = {};
	render() {
		const { placeHolder, onInput, id } = this.props;
		return (
			<input
				type="text"
				name=""
				id={id}
				className="input"
				placeholder={placeHolder}
				onInput={(event) => onInput(event, id)}
			></input>
		);
	}
}

export default InputField;
