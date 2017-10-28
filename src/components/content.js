import React from 'react'
import styles from '../stylesheets/content.css';
import content from '../copy';

export const Content = (props) => {
	const { id } = props;
	const { image, title, copy } = content[id];
	const offsetImage = id === 'invest' || id === 'autonomous';
	const smallView = window.innerWidth < 600;

	return (
		<div id={id} className={styles.content}>
			{!offsetImage || smallView ? <i className={`${styles.image} ${image}`}aria-hidden="true"></i> : null}
			<div className={styles.wrapper}>
				<div className={styles.title}>{title}</div>		
				<div className={styles.copy}>{copy}</div>
			</div>
			{offsetImage && !smallView ? <i className={`${styles.image} ${image}`}aria-hidden="true"></i> : null}
		</div>
	);
};

