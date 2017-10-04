import React from 'react';
import Slider from 'react-slick';
import styles from '../stylesheets/gallery.css';
import addFlightImg from '../../assets/images/add-flight.png';
import confirmFlightImg from '../../assets/images/confirm-flight.png';

export const Gallery = (props) => {
	const settings = {
		dots: true,
		arrows: true,
		swipe: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <Arrow direction={'right'}/>,
		prevArrow: <Arrow direction={'left'}/>
	};

	return (
		<div id="gallery" className={styles.gallery}>
			<Slider {...settings}>
				{/* Additional div here is for Slider. It dynamically adds classes which override the classes in our container class. */}
				<div>
					<div className={styles.container}>
						<img className={styles.image} src={addFlightImg} />
						<div className={styles.caption}>lorem ipsum</div>
					</div>
				</div>

				<div>
					<div className={styles.container}>
						<img className={styles.image} src={confirmFlightImg} />
						<div className={styles.caption}>lorem ipsum</div>
					</div>
				</div>
			</Slider>
		</div>	
	);
};

function Arrow (props) {
	const { direction, onClick } = props;
	const className = `fa fa-chevron-${direction}`;

	return (
		<div className={`${styles.arrow} ${styles[direction]}`} onClick={onClick}>
			<i className={className} aria-hidden="true"></i>
		</div>
	);
}