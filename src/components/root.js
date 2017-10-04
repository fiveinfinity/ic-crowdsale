import React from 'react'
import { Nav, Home, Gallery, About } from './';

export const Root = (props) => {	
	return (
		<div>
			<Nav />
			<Home />
			<Gallery />
			<About />
		</div>
	);
};
