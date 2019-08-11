import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'uuid'
import ContactUs from './ContactUs'


class Nav extends Component {
  constructor(props) {
		super(props);
		this.state = {showPortal: false}

		this.handleShow = this.handleShow.bind(this)
		this.handleHide = this.handleHide.bind(this)
  }

  handleShow() {
    this.setState({showPortal: true})
		document.body.classList.add('u-no-overflow')
		document.body.classList.remove('body-fadein')
  }
  
  handleHide() {
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
		      <div className="contactus" role="dialog" aria-labelledby="dialogTitle">
		      	<div className="contactus__inner">
		      		<h1 className="h1 h1--contactus" id="dialogTitle">Contact Us</h1>

							<p>
								<a 
									className="btn btn--text btn--text-contactus" 
									href="https://maps.google.com/" 
									target="_blank" 
									rel="noreferrer noopener">
									<b>Great Design Co.</b><br />
									123 Main St.<br />
									San Franciso, CA 10001
								</a>
							</p>

							<p className="contactus__email">hello @ greatdesign.co</p>

			        <div className="btn-close-wrap">
			        	<button className="btn btn--button btn--close" onClick={this.handleHide}>Close me!</button>
			        </div>
			      </div>
		      </div>
	      </ContactUs>
	    ) : null;

		return (
			<nav>
				<ul className="navlist">
					<li className="nav-li nav-li--primary" key={uuid()}>
						<NavLink to="/about" className="btn btn--nav btn--nav-primary">About Us</NavLink> 
					</li>

					<li className="nav-li nav-li--primary" key={uuid()}>
						<NavLink to="/our-work" className="btn btn--nav btn--nav-primary">Our Work</NavLink> 
					</li>

					<li className="nav-li nav-li--primary" key={uuid()}>
						<button className="btn btn--nav btn--nav-primary" onClick={this.handleShow}>Contact Us</button>
					</li>
				</ul>

				{portal}
			</nav>
		);
	}
}


export default Nav



