import React from 'react'
import uuid from 'uuid'
import { PortalWithState } from 'react-portal'


function ContactUs() {
  return (
		<PortalWithState 
			closeOnOutsideClick 
			closeOnEsc
			onOpen={() => {
				document.body.classList.add('u-no-overflow')
				document.body.classList.remove('body-fadein')
			}} 
			onClose={() => {
				document.body.classList.remove('u-no-overflow')
				document.body.classList.add('body-fadein')
			}}
		>
		  {({ openPortal, closePortal, isOpen, portal, onOpen }) => [

			  <button className="btn btn--nav btn--nav-primary" onClick={openPortal} key={uuid()}>
			  	Contact Us
			  </button>,

		    portal(
		      <div className="contact">
		      	<div className="contact__inner">
		      		<h1 className="h1 h1--contact">Contact Us</h1>

							<p>
								<a 
									className="btn btn--text btn--text-contact" 
									href="https://maps.google.com/" 
									target="_blank" 
									rel="noreferrer noopener">
									<b>Great Design Co.</b><br />
									123 Main St.<br />
									San Franciso, CA 10001
								</a>
							</p>

							<h2 className="h2">hello @ greatdesign.co</h2>

			        <div className="btn-close-wrap">
			        	<button className="btn btn--button btn--close" onClick={closePortal}>Close me!</button>
			        </div>

			        <div className="u-mb-hide">(or press ESC)</div>
			      </div>
		      </div>
		    ),
		  ]}
		</PortalWithState>
  );
}

export default ContactUs