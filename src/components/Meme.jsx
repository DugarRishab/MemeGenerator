import React, { Component } from 'react';
import InputField from './InputField';
import Button from './Button';

class Meme extends Component {
	state = {} 
	
	
	render() { 
		const { onGenerateMeme, onInput } = this.props;
		return (
			<main className="meme">
				<div className='form'>
					<InputField
						placeHolder="Top Text"
						key="top-text"
						onInput={onInput}
						id="top-text"
					></InputField>
					<InputField
						placeHolder="Bottom Text"
						key="bottom-text"
						onInput={onInput}
						id="bottom-text"
					></InputField>
					<Button innerText="Get a new meme Image" onGenerateMeme={ onGenerateMeme }></Button>
				</div>
			</main>
		);
	}
}
 
export default Meme;