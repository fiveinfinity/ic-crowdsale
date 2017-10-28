import React from 'react';
import styles from '../stylesheets/about.css';

export const About = (props) => {
	return (
		<div className={styles.about}>
			<div className={styles['top-line']}></div>
			<div className={styles['profile-wrapper']}>
				<img className={styles.picture} src="../../public/images/poppe.jpg" alt="Picture of Brian Poppe" />
				<div className={styles.name}>Brian Poppe</div>
				<div className={styles.description}>Before founding I'm Convenienced, Brian served as an actuary for over a decade. Still serving as a Vice President at Mutual of Omaha partnering with startups, Brian's mix of insurance & actuarial knowledge lends himself as a perfect candidate to bring the world better insurance.</div>
			</div>
			<div className={styles['profile-wrapper']}>
				<img className={styles.picture} src="../../public/images/lachance.jpg" alt="Picture of Joe LaChance" />
				<div className={styles.name}>Joe LaChance</div>
				<div className={styles.description}>With development experience at multiple Fortune 500 & Fortune 100 companies, Joe brings a passion to blockchain technology & change to industries needing a boost in technology. Having founded multiple companies, Joe's mix of entreprenuerial and development skills lend perfectly to disrupting the insurance industry with I'm Convenienced.</div>
			</div>
			<div className={styles['bottom-line']}></div>
		</div>
	);
};
