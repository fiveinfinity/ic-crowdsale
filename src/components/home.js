import React from 'react';
import styles from '../stylesheets/home.css';

export const Home = (props) => {
	return (
		<div id="home" className={styles.home}>
			<div className={styles.title}>Peace of mind.</div>
			<div className={styles.copy}>lorem ipsum</div>
		</div>
	);
};