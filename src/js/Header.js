import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

import logo from '../img/logo.png'


function Header() {
	return (
		<header className="header active">
			<div className="header__inner">
				
				<div>
					<Link to="/">
						<img className="header-logo" src={logo} alt="Great Design Co. logo" />
					</Link>
				</div>

				<Nav />

			</div>
		</header>
	);
}


export default Header



