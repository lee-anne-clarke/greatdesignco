import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'uuid'
import ContactUs from './ContactUs'


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
			{ 
				id: uuid(), 
				button: <NavLink to='/about' className='btn btn--nav btn--nav-primary' activeClassName='active'>About Us</NavLink> 
			},
			{ 
				id: uuid(), 
				button: <NavLink to='/our-work' className='btn btn--nav btn--nav-primary' activeClassName='active'>Our Work</NavLink> 
			},
			{ 
				id: uuid(), 
				button: <ContactUs /> 
			},
     ],
    }
  }

	componentDidMount() {
	  window.scrollTo(0, 0)
	}

	render() {
		const { navItems } = this.state

		return (
			<nav>
				<ul className="navlist">
					{navItems.map(({ id, button }) => (
						<li className="nav-li nav-li--primary" key={id}>
							{button}
						</li>
					))}
				</ul>
			</nav>
		);
	}
}


export default Nav



