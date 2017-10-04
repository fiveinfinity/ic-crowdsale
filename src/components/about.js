import React from 'react';
import { Footer } from './footer';
import styles from '../stylesheets/about.css';

export const About = (props) => {
	return (
		<div id="about" className={styles.about}>
			<div className={styles.background}>
				<div className={styles['bio-wrapper']}>
					{/* <img src="" /> */}
					<div className={styles.bio}>lorem ipsum</div>
					{/* <img src="" /> */}
					<div className={styles.bio}>lorem ipsum</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};