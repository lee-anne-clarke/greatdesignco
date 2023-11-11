'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import AboutBox from './AboutBox'

import heroImg from '../../img/about/aboutus-hero.jpg'
import aboutUsImg1 from '../../img/about/aboutus1.jpg'
import aboutUsImg2 from '../../img/about/aboutus2.jpg'
import aboutUsImg3 from '../../img/about/aboutus3.jpg'


export default function About() {
	const [showMoreBox1, setShowMoreBox1] = useState(false);
	const [btnTextBox1, setBtnTextBox1] = useState('Show more');

	const [showMoreBox2, setShowMoreBox2] = useState(false);
	const [btnTextBox2, setBtnTextBox2] = useState('Show more');

	const [showMoreBox3, setShowMoreBox3] = useState(false);
	const [btnTextBox3, setBtnTextBox3] = useState('Show more');


	const handleToggleShowMore1 = () => {
		if (showMoreBox1 === false) {
			setShowMoreBox1(true);
			setBtnTextBox1('Show less');
		} else {
			setShowMoreBox1(false);
			setBtnTextBox1('Show more');
		}
	}

	const handleToggleShowMore2 = () => {
		if (showMoreBox2 === false) {
			setShowMoreBox2(true);
			setBtnTextBox2('Show less');
		} else {
			setShowMoreBox2(false);
			setBtnTextBox2('Show more');
		}
	}

	const handleToggleShowMore3 = () => {
		if (showMoreBox3 === false) {
			setShowMoreBox3(true);
			setBtnTextBox3('Show less');
		} else {
			setShowMoreBox3(false);
			setBtnTextBox3('Show more');
		}
	}

	useEffect(() => {
		document.title = "About Us | Great Design Co."
	}, []);


	return (
	  	<>
			<Slider>
				<div>
					<div className="slide-text">
						<h1 className="h1">About Us</h1>
					</div>
					<div className="slide-overlay"></div>
					<Image src={heroImg} alt="" />
				</div>
			</Slider>

			<div className="container">
				<section className="u-textcenter">
					<h2 className="h2">About our amazing company.</h2>
					<p>Vestibulum sed facilisis dolor, eget posuere libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				</section>

				<hr className="hr" />

				<AboutBox 
					imgSrc={aboutUsImg1} 
					title="Our history" 
					textAreaClasses={showMoreBox1 ? 'content showContent' : 'content hideContent'}
					btnText={btnTextBox1}
					showMoreHandler={handleToggleShowMore1}
				>
					<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
					<p>Franzen fixie laborum, keffiyeh pariatur minim listicle polaroid cred affogato. Duis pickled retro you probably haven't heard of them 90's non air plant offal franzen la croix. Raw denim hashtag in slow-carb next level. Kogi ea dreamcatcher affogato fam, knausgaard fingerstache dolore migas kale chips slow-carb pickled freegan sint.</p>
				</AboutBox>

				<AboutBox 
					imgSrc={aboutUsImg2}
					title="Our team"
					textAreaClasses={showMoreBox2 ? 'content showContent' : 'content hideContent'}
					btnText={btnTextBox2}
					showMoreHandler={handleToggleShowMore2}
					>
					<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
					<p>Franzen fixie laborum, keffiyeh pariatur minim listicle polaroid cred affogato. Duis pickled retro you probably haven't heard of them 90's non air plant offal franzen la croix. Raw denim hashtag in slow-carb next level.</p>
				</AboutBox>

				<AboutBox 
					imgSrc={aboutUsImg3}
					title="Our services"
					textAreaClasses={showMoreBox3 ? 'content showContent' : 'content hideContent'}
					btnText={btnTextBox3}
					showMoreHandler={handleToggleShowMore3}
					>
					<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
					
					<ul>
						<li>Quis chia polaroid single-origin coffee</li>
						<li>Sint velit ipsum fugiat shoreditch</li>
						<li>Pariatur small batch green juice sriracha </li>
						<li>Yuccie minim duis stumptown</li>
					</ul>
				</AboutBox>

			</div> {/* end .container */}
	    </>
  	);
  
}
