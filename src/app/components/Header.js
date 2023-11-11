'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import ContactModal from './ContactModal'
import logo from '../../img/logo.png'


export default function Header() {
	const [headerActive, setHeaderActive] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
		  if (window.scrollY > 50) {
		    setHeaderActive(true)
		  } else {
		    setHeaderActive(false)
		  }
		})
	});


	const pathname = usePathname()
  	//console.log('Current pathname:', pathname);


	return (
		<header className={headerActive ? 'header active' : 'header'}>
			<div className="header__inner">
				
				<div>
					<Link href="/">
						<Image 
							className="header-logo" 
							src={logo} 
							alt="Great Design Co. logo" 
							priority={true} />
					</Link>
				</div>


				<nav>
					<ul className="navlist">
					
						<li className="nav-li nav-li--primary" key={uuidv4()}>
							<Link 
								href="/about" 
								className={pathname === '/about/' ? 'btn btn--nav btn--nav-primary active' : 'btn btn--nav btn--nav-primary'}
							>
								About Us
							</Link> 
						</li>

						<li className="nav-li nav-li--primary" key={uuidv4()}>
							<Link 
								href="/our-work" 
								className={pathname == '/our-work/' || pathname == '/our-work/project/' ? 'btn btn--nav btn--nav-primary active' : 'btn btn--nav btn--nav-primary'}
							>
								Our Work
							</Link> 
						</li>

						<ContactModal />

					</ul>
				</nav>

			</div>
		</header>
	);
}



