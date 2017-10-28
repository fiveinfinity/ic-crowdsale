import React from 'react';
import styles from '../stylesheets/about.css';

export const About = (props) => {
	return (
		<div className={styles.about}>
			<div className={styles['top-line']}></div>
			<div className={styles['profile-wrapper']}>
				<img className={styles.picture} src="../../public/images/poppe.jpg" alt="Picture of Brian Poppe" />
				<div className={styles.name}>Brian Poppe</div>
				<div className={styles.description}>Lorem Ipsum</div>
			</div>
			<div className={styles['profile-wrapper']}>
				<img className={styles.picture} src="../../public/images/lachance.jpg" alt="Picture of Joe LaChance" />
				<div className={styles.name}>Joe LaChance</div>
				<div className={styles.description}>Lorem Ipsum</div>
			</div>
			<div className={styles['bottom-line']}></div>
		</div>
	);
};
