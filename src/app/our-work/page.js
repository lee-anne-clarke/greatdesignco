'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import Slider from 'react-slick'
import { sliderSettings } from '../components/carousel/sliderSettings'
import Scroll from 'react-scroll'
import { v4 as uuidv4 } from 'uuid';

import PrintDesign from './PrintDesign'
import WebDev from './WebDev'
import Strategy from './Strategy'
import ExpDesign from './ExpDesign'

import heroImg from '../../img/work/work-hero.jpg'

//Variables needed for react-scroll
let Events     = Scroll.Events
let scrollSpy  = Scroll.scrollSpy
let scroller   = Scroll.scroller
let Element    = Scroll.Element


export default function Work() {

	useEffect(() =>  {
		document.title = "Our Work | Great Design Co."

		//react-scroll
		scrollSpy.update();

		return () => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		}
	});

	
	const [workNavItems] = useState(
		[
			{ 
				btnText: 'Print Design' 
			},
			{ 
				btnText: 'Web Development'
			},
			{ 
				btnText: 'Strategy'
			},
			{ 
				btnText: 'Experience Design'
			},
    	]
	);


	const [currentWorkSection, setCurrentWorkSection] = useState('');


	const handleSelectWork = (event) => {
		setCurrentWorkSection(event.target.value);
		scroller.scrollTo('workSectionsAnchor', {smooth: true,});
	}


  return (
  	<>
  		<Slider {...sliderSettings}>
				<div>
					<div className="slide-text">
						<h1 className="h1">Our Work</h1>
					</div>

					<div className="slide-overlay"></div>
					<Image src={heroImg} alt="" priority />
				</div>
			</Slider>


			<div className="container">
				<nav>
					<ul className="navlist navlist--work">

						{workNavItems.map(({ btnText }) => (
							<li className="nav-li nav-li--work" key={uuidv4()}>
								<button 
									className={currentWorkSection === btnText ? 'btn btn--nav btn--nav-secondary active' : 'btn btn--nav btn--nav-secondary'} 
									value={btnText}
									onClick={handleSelectWork}>
									{btnText}
								</button>
							</li>
						))}
						<div className="navlist--work__bar"></div>
					</ul>
				</nav>

				<Element name="workSectionsAnchor" className="anchor" />

				<hr className="hr hr--work" />

				<div className="u-textcenter">
					<p>Check out our amazing work from a variety of industries.</p>

					<PrintDesign visible={currentWorkSection === 'Print Design'} />

					<WebDev visible={currentWorkSection === 'Web Development'} />

					<Strategy visible={currentWorkSection === 'Strategy'} />

					<ExpDesign visible={currentWorkSection === 'Experience Design'} />
					
				</div>

			</div> {/* END OF .container */}


	   </>
  );
 
}


