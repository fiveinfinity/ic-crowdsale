import React from 'react';
import styles from '../stylesheets/home.css';

export const Home = (props) => {
	return (
		<div id="home" className={styles.home}>
			<div className={styles.block}>
				<div className={styles.title}>Peace of mind.</div>
				<div className={styles.copy}>We want to make insurance easier. With the advent of the blockchain, we can give you insurance that you can trust. This is the only insurance that is autonomous, automatically processing claims, all with complete transparency.</div>
			</div>

			<div className={styles.block}>
				<div className={styles.subtitle}>This is the future of insurance.</div>
			</div>
		</div>
	);
};
