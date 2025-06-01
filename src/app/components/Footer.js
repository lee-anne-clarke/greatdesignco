import React from 'react'
import Link from 'next/link'


export default function Footer() {
	const currentYear = new Date().getFullYear();
	
	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer-col">
					<p>
						<b>Great Design Co.</b><br />
						<Link className="btn btn--text btn--text-footer" href="https://maps.google.com/" target="_blank">
							123 Main St.<br />
							San Franciso, CA 10001
						</Link>
					</p>
				</div> 

				<div className="footer-col footer-col--cr">
					<p>&copy; Great Design Co. {currentYear}</p>
				</div>

				<div className="footer-col">
					<p><b>Connect with us</b></p>
					<div>
						<Link href="https://twitter.com/" target="_blank">
							<svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className="st0" d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1.1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"/></svg>
						</Link>

						<Link href="https://facebook.com/" target="_blank">
							<svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className="st0" d="M4.1 5.3h1.7V3.7c0-.7 0-1.8.5-2.5C6.9.5 7.6 0 8.9 0c2.1 0 3 .3 3 .3l-.4 2.5s-.7-.2-1.3-.2c-.6 0-1.2.2-1.2.9v2h2.6l-.2 2.4H8.9V16H5.8V7.7H4.1V5.3"/></svg>
						</Link>

						<Link href="https://instagram.com/" target="_blank">
							<svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"><path d="M23.94 21.57a2.55 2.55 0 0 1-2.54 2.56H5.13a2.55 2.55 0 0 1-2.54-2.56V10.62h3.96a7.29 7.29 0 0 0 6.72 10.06 7.29 7.29 0 0 0 6.71-10.06h3.96zM13.27 8.66a4.67 4.67 0 0 1 4.66 4.71c0 2.59-2.09 4.7-4.66 4.7a4.69 4.69 0 0 1-3.79-7.45 4.67 4.67 0 0 1 3.79-1.96zm9.6-5.58h.59v4.53l-4.48.01-.02-4.53zM5.13 0A5.16 5.16 0 0 0 0 5.17v16.4c0 2.85 2.3 5.17 5.13 5.17H21.4a5.16 5.16 0 0 0 5.13-5.17V5.17c0-2.85-2.3-5.17-5.13-5.17z"/></svg>
						</Link>

						{/* LinkedIn */}
						<Link href="https://linkedin.com/" target="_blank">
							<svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path className="st0" d="M0 1.9C0 1.4.2.9.6.5 1 .2 1.4 0 1.9 0s1 .2 1.4.6.6.8.6 1.4c0 .5-.2 1-.6 1.4-.4.3-.8.5-1.4.5-.5 0-1-.2-1.4-.6-.3-.4-.5-.9-.5-1.4zm.1 13.6V5.4c0-.1 0-.2.1-.3.1-.1.2-.1.3-.1h2.8c.1 0 .2 0 .3.1s.1.2.1.3v10.1c0 .1 0 .2-.1.3-.1.1-.2.1-.3.1H.5c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3zm5.2 0V5.4c0-.1 0-.2.1-.3.1-.1.2-.1.3-.1h2.8c.1 0 .1 0 .2.1s.1.1.1.2v.5c.7-.7 1.7-1 2.8-1 1.3 0 2.4.3 3.1 1s1.1 1.6 1.1 2.9v6.8c0 .1 0 .2-.1.3 0 .2-.1.2-.2.2h-2.9c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3V9.4c0-.5-.1-.9-.3-1.2-.2-.3-.6-.4-1.1-.4-.7 0-1.2.2-1.4.6-.2.4-.3 1-.3 1.7v5.4c0 .1 0 .2-.1.3-.1.1-.2.1-.3.1H5.8c-.1 0-.2 0-.3-.1-.2-.1-.2-.2-.2-.3z"/></svg>
						</Link>

					</div>
				</div> {/* END OF .footer-col */}
			</div> {/* END OF .inner */}
		</footer>
	)
}

