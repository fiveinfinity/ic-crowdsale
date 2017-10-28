import React from 'react'
import styles from '../stylesheets/content.css';
import content from '../copy';

export const Content = (props) => {
	const { id } = props;
	const { image, title, copy } = content[id];

	return (
		<div id={id} className={styles.content}>
			<i className={`${styles.image} ${image}`}aria-hidden="true"></i>
			<div className={styles.wrapper}>
				<div className={styles.title}>{title}</div>		
				<div className={styles.copy}>{copy}</div>
			</div>
		</div>
	);
};
