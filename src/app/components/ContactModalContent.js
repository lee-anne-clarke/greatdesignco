import React from 'react'
//import ExtLink from '../ExtLink'
import Link from 'next/link'


export default function ContactModalContent({ onClose }) {
	return (
		<div className="contactus" role="dialog" aria-labelledby="dialogTitle">

	  		<div className="contactus__inner">
				<h1 className="h1 h1--contactus" id="dialogTitle">Contact Us</h1>

				<p>
					<Link className="btn btn--text btn--text-contactus" href="https://maps.google.com/" target="_blank">
						<b>Great Design Co.</b><br />
						123 Main St.<br />
						San Franciso, CA 10001
					</Link>
				</p>

				<p className="contactus__email">hello @ greatdesign.co</p>

				<div className="btn-close-wrap">
					<button className="btn btn--button btn--close" onClick={onClose}>
						Close me!
					</button>
				</div>
	    	</div>

		</div>
	);
}

