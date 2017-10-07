import React from 'react';
import styles from '../stylesheets/benefits.css';

export const Benefits = (props) => {
	return (
		<div id="benefits" className={styles.benefits}>
			<div>
				<div className={styles.headline}>Benefits over Traditional Insurance</div>
				<div className={styles.block}>
					<i className={`fa fa-check-circle-o ${styles.check}`} aria-hidden="true"></i>
					<div className={styles.textblock}>
						<div className={styles.title}>Lower Costs.</div>
						<div className={styles.content}>Since all policies are written using smart contracts, we can keep policy costs lower because we can efficiently run with a lighter workforce, and, a DAO can hold the employees we do have accountable.</div>
					</div>
				</div>
				<div className={styles.block}>
					<i className={`fa fa-check-circle-o ${styles.check}`} aria-hidden="true"></i>
					<div className={styles.textblock}>
						<div className={styles.title}>Invest in Your Future.</div>
						<div className={styles.content}>With our ICC Token, which will be available during our crowd sale, you can pre-pay for insurance now, and increase savings over time as inflation increases the cost of insurance. Our initial insurance offering, Flight Delay, will always cost 1 ICC, forever.</div>
					</div>
				</div>
				<div className={styles.block}>
					<i className={`fa fa-check-circle-o ${styles.check}`} aria-hidden="true"></i>
					<div className={styles.textblock}>
						<div className={styles.title}>Transparency &amp; Efficiency.</div>
						<div className={styles.content}>Since everything on the blockchain is public, our model of insurance is completely transparent. Our smart contracts will clearly outline where money flows &amp; when policies will be paid, so you know what you’re getting before you pay.</div>
					</div>
				</div>
				<div className={styles.block}>
					<i className={`fa fa-check-circle-o ${styles.check}`} aria-hidden="true"></i>
					<div className={styles.textblock}>
						<div className={styles.title}>Autonomous &amp; Scalable.</div>
						<div className={styles.content}>As outlined in our white paper, our smart contracts can activate newer smart contracts to replace the older ones once significance is met. Namely, lower prices once our risk pool can support more policies &amp; the ability to implement a DAO for underwriting.</div>
					</div>
				</div>
			</div>
		</div>
	);
};