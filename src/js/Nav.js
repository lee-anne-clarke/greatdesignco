import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'uuid'
import ContactUs from './ContactUs/ContactUs'
import ContactUsInner from './ContactUs/ContactUsInner'


class Nav extends Component {
  constructor(props) {
		super(props);
		this.state = {showPortal: false}

		this.handleShowPortal = this.handleShowPortal.bind(this)
		this.handleHidePortal = this.handleHidePortal.bind(this)
  }

  handleShowPortal() {
    this.setState({showPortal: true})
		document.body.classList.add('u-no-overflow')
		document.body.classList.remove('body-fadein')
  }
  
  handleHidePortal() {
    this.setState({showPortal: false})
		document.body.classList.remove('u-no-overflow')
		document.body.classList.add('body-fadein')
  }

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {
		const portal = this.state.showPortal ? (
			<ContactUs>
				<ContactUsInner clickEvent={this.handleHidePortal} />
			</ContactUs>
		) : null;

		return (
			<nav>
				<ul className="navlist">
					<li className="nav-li nav-li--primary" key={uuid()}>
						<NavLink to="/about" className="btn btn--nav btn--nav-primary">
							About Us
						</NavLink> 
					</li>

					<li className="nav-li nav-li--primary" key={uuid()}>
						<NavLink to="/our-work" className="btn btn--nav btn--nav-primary">
							Our Work
						</NavLink> 
					</li>

					<li className="nav-li nav-li--primary" key={uuid()}>
						<button className="btn btn--nav btn--nav-primary" onClick={this.handleShowPortal}>
							Contact Us
						</button>
					</li>
				</ul>

				{portal}
			</nav>
		);
	}
}


export default Nav



