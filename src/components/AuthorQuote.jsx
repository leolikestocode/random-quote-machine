import React, { Component } from 'react';

const author = [
	{
		name: 'Bob Dylan',
		text:
			'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.'
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
		name: 'Everything you’ve ever wanted is on the other side of fear.',
		text: 'George Addair'
	},
	{
		name: 'Farrah Gray',
		text: 'Build your own dreams, or someone else will hire you to build theirs.'
	}
];

export class AuthorQuote extends Component {
	constructor() {
		super();
		// here i need to call Header class function check click....
		// How to call Header.checkClick() from this class
	}

	render() {
		let randomIndex = Math.floor(Math.random() * 5);

		return author.map((content, index) => {
			return (
				randomIndex === index && (
					<div key={index} className='author-data'>
						<p id='text'>{content.text}</p>
						<span id='author'>{content.name}</span>
					</div>
				)
			);
		});
	}
}

export default AuthorQuote;
