import React, { Component } from 'react';

const author = [
	{
		name: 'Bob Dylan',
		text: 'A man is a success if he gets up in the morning and goes to bed at night.'
	},
	{
		name: 'John Lennon',
		text: 'Life is what happens to you while you’re busy making other plans.'
	},
	{
		name: 'Chinese Proverb',
		text: 'The best time to plant a tree was 20 years ago. The second best time is now.'
	},
	{
		name: 'George Addair',
		text: 'Everything you’ve ever wanted is on the other side of fear.'
	},
	{
		name: 'Farrah Gray',
		text: 'Build your own dreams, or someone else will hire you to build theirs.'
	}
];

class AuthorQuote extends Component {
	constructor() {
		super();

		this.state = {
			change: 1,
			previous: null
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (index) => {
		this.setState((state) => {
			return {
				change: state.change === 5 ? 1 : state.change + 1,
				previous: index
			};
		});
	};

	render() {
		let randomIndex = Math.floor(Math.random() * 5);
		if (this.state.previous === randomIndex) this.handleClick(randomIndex);

		return author.map((content, index) => {
			return (
				randomIndex === index && (
					<div key={index} className={'color' + this.state.change} id='author-data'>
						<p id='text'>{content.text}</p>
						<span id='author'>{content.name}</span>
						<div
							id='new-quote'
							className={'color' + this.state.change}
							onClick={() => this.handleClick(index)}
						>
							New Quote
						</div>
						<a
							id='tweet-quote'
							href={'https://twitter.com/intent/tweet?hashtags=' + content.text}
							onClick={this.handleClick}
							target='_blank'
						>
							Tweet this
						</a>
					</div>
				)
			);
		});
	}
}

export default AuthorQuote;
