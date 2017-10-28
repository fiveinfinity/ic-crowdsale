import React from 'react'
import { Nav, Home, Gallery, About, Benefits, Info, Contact, Content } from './';

export const Root = (props) => {	
	return (
		<div>
			<Nav />
			<Home />
			<Info id="benefits" component={Content} />
			<Info id="invest" component={Content} />
			<Info id="efficient" component={Content} />
			<Info id="autonomous" component={Content} />
			<Info id="gallery" component={Gallery} />
			<Info id="about" component={About} />
			<Contact />
		</div>
	);
};
