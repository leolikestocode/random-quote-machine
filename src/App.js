import React from 'react';
import AuthorQuote from './components/AuthorQuote';
import NewQuote from './components/NewQuote';
import './App.css';

function App(){
	return (
		<div className='full-container'>
			<div id='quote-box'>
				<AuthorQuote />
				<NewQuote />
				<div className='social-quote'>
					<button id='tweet-quote' />
				</div>
			</div>
		</div>
	);
}

export default App;
