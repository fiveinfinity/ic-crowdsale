import React from 'react';

export class Info extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			opacity: 0
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount () {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll () {
		const el = window.document.getElementById(this.props.id);
		const height = el.clientHeight;
		const offset = el.offsetTop;
		const top = window.scrollY;

		if (top >= offset) {
			const opacity = (top-offset)/height - .5;
			this.setState({opacity: opacity});
		} else {
			this.setState({opacity: 0});
		}
	}


	render () {
		return (
			<div id={this.props.id} style={{background: `rgba(0, 0, 0, ${this.state.opacity})`}}>
				<this.props.component {...this.props} />
			</div>
		);
	}
}