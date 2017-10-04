import React, { Component } from 'react';
import P from 'prop-types';
import { Link, animateScroll } from 'react-scroll';
import styles from '../stylesheets/nav.css';
import logo from '../../assets/images/ic-logo.png';

export class Nav extends Component {
	constructor () {
		super();

		this.state = {
			showSideNav: false
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav () {
		this.setState({ showSideNav: !this.state.showSideNav });
	}

	render () {
		const active = this.state.showSideNav ? 'is-active' : 'not-active';

		return (
			<div>
				<div className={styles.nav}>
					<Link to="home" smooth={true} offset={-60} duration={500}>
						<img className={styles.logo} src={logo} />
					</Link>
					<div className={styles.name}>IM CONVENIENCED</div>
					<div className={`${styles.item} ${styles.whitepaper}`}>
						WHITEPAPER
						<img className={styles.comingsoon} src="assets/images/coming-soon.png" />	
					</div>
					<Link className={styles.item} to="gallery" smooth={true} offset={-60} duration={500}>GALLERY</Link>
					<Link className={`${styles.item} ${styles.last}`} to="about" smooth={true} offset={-60} duration={500}>ABOUT US</Link>
					<div className={styles['border-box']}></div>
					<div type="button" className={`${styles.hamburger} ${styles['hamburger--spin']} ${styles[active]}`} onClick={this.toggleNav}>
						<span className={styles['hamburger-box']}>
							<span className={styles['hamburger-inner']}></span>
						</span>
					</div>
				</div>
				<SideNav showSideNav={this.state.showSideNav} />
			</div>
		);
	}
};

Nav.displayName = 'Nav';

const SideNav = ({ showSideNav }) => {
	const toggledNav = showSideNav ? 'open' : 'close';
	const fade = showSideNav ? 'fade-in' : 'fade-out';

	return (
		<div className={`${styles.sidenav} ${styles[toggledNav]}`}>
			<div className={styles['sidenav-vertical']}></div>
			<div className={styles['sidenav-header']}>
				<Link to="home" smooth={true} offset={-60} duration={500}>
					<img className={`${styles['logo-sidenav']} ${styles[fade]}`} src="assets/images/ic-logo.png" />
				</Link>
			</div>

			<a href="#" className={`${styles['item-sidenav']} ${styles[fade]} ${styles.whitepaper}`}>
				WHITEPAPER
				<img className={styles.comingsoon} src="assets/images/coming-soon.png" />	
			</a>
			
			<Link to="gallery" smooth={true} offset={-60} duration={500}>
				<div className={`${styles['item-sidenav']} ${styles[fade]}`}>
					GALLERY
				</div>
			</Link>
			
			<Link to="about" smooth={true} offset={-60} duration={500}>
				<div className={`${styles['item-sidenav']} ${styles[fade]}`}>
					ABOUT
				</div>
			</Link>
		</div>
	);
}

SideNav.displayName = 'SideNav';
