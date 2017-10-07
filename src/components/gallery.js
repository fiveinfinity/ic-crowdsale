import React from 'react';
import Slider from 'react-slick';
import styles from '../stylesheets/gallery.css';
import addFlightImg from '../../assets/images/add-flight.png';
import confirmFlightImg from '../../assets/images/confirm-flight.png';
import text from '../../assets/images/text.png';
import pay from '../../assets/images/pay.png';

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
						<div className={styles.caption}>Quickly add your flight. All we need to issue a policy is the date of departure and the flight number.</div>
					</div>
				</div>

				<div>
					<div className={styles.container}>
						<img className={styles.image} src={confirmFlightImg} />
						<div className={styles.caption}>We’ll collect the rest of the data we need to write a policy, all you do is confirm.</div>
					</div>
				</div>

				<div>
					<div className={styles.container}>
						<img className={styles.image} src={text} />
						<div className={styles.caption}>When our API tells us your flight is delayed, you’ll be the first to know. As soon as we get the notification, we will send you a text so you can pick your new flight and be on your way.</div>
					</div>
				</div>

				<div>
					<div className={styles.container}>
						<img className={styles.image} src={pay} />
						<div className={styles.caption}>Most blockchain dapps force you to use your bitcoin wallet address to pay, making the payment process inefficient. Our payment system will take your fiat currency and convert it to ICC tokens automatically, so you can still pay as easily as you do now.</div>
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