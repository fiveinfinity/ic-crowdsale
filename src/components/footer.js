import React from 'react';
import styles from '../stylesheets/footer.css';

export const Footer = (props) => {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<i className="fa fa-copyright" aria-hidden="true"></i>I'M CONVENIENCED, LLC. All rights Reserved.
			</div>
			<div className={`${styles.content} ${styles.social}`}>
				<a href="https://twitter.com/imconvenienced"><i className="fa fa-twitter-square fa-inverse" aria-hidden="true"></i></a>
				<a href="https://imconvenienced.slack.com/join/shared_invite/enQtMjYyOTMzNjMwOTEyLWMyYTVlZTA1Y2EyZWIyOTI2ZTJmYzdmMTg2MDcwMDAzZjIyODlhZDNjZTFiNjkwMjdhYWJmNzdlZjIyZGYwOWI"><i className="fa fa-slack fa-inverse" aria-hidden="true"></i></a>
				<a href="https://www.reddit.com/r/imconvenienced/"><i className="fa fa-reddit-square fa-inverse" aria-hidden="true"></i></a>
			</div>
			<img className={styles.frog} src="../../public/images/frog.jpg" alt="For Soren." />
		</div>
	);
};