import React from 'react';
import styles from '../stylesheets/footer.css';

export const Footer = (props) => {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<i className="fa fa-copyright" aria-hidden="true"></i>I'M CONVENIENCED, LLC. All rights Reserved.
			</div>
			<div className={`${styles.content} ${styles.social}`}>
				<i className="fa fa-twitter-square fa-inverse" aria-hidden="true"></i>
				<i className="fa fa-facebook-square fa-inverse" aria-hidden="true"></i>
				<i className="fa fa-reddit-square fa-inverse" aria-hidden="true"></i>
			</div>
			<div className={styles.content}>For Soren.</div>
		</div>
	);
};