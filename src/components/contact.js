import React from 'react';
import { Footer } from './footer';
import styles from '../stylesheets/contact.css';

export const Contact = (props) => {
	return (
		<div id="contact" className={styles.contact}>
			<div className={styles.wrapper}>
				Subscribe for News & Updates
				<div className={styles.copy}>
					* We promise we won't share this with anyone else, ever.
				</div>
				<form className={styles.form} action="mailto:imconvenienced@gmail.com" method="post" enctype="text/plain">
					<input className={styles.input} type="text" />
					<input className={styles.submit} type="submit" value="SUBMIT"/>
				</form>
			</div>
			<Footer />
		</div>
	);
};
