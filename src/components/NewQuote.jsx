import React, { Component } from 'react';

export class NewQuote extends Component {
	handleClick = () => {
		window.location.reload();
	};
	render() {
		return (
			<div id='new-quote' onClick={this.handleClick}>
				New Quote
			</div>
		);
	}
}

export default NewQuote;
