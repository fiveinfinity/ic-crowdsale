import React from 'react'
import { Nav, Home, Gallery, About, Benefits } from './';

export const Root = (props) => {	
	return (
		<div>
			<Nav />
			<Home />
			<Benefits />
			<Gallery />
			<About />
		</div>
	);
};
