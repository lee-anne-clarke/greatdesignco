import React from 'react'


function ContactUsInner(props) {
	return (
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
	      	<button className="btn btn--button btn--close" onClick={props.clickEvent}>
	      		Close me!
	      	</button>
	      </div>
	    </div>
	  </div>
  );
}


export default ContactUsInner