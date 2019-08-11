import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import srMainConfig from '../sr/srConfig'
import sr from '../sr/ScrollReveal'
import AboutBox from './AboutBox'

import heroImg from '../../img/aboutus/aboutus-hero.jpg'
import aboutUsImg1 from '../../img/aboutus/aboutus1.jpg'
import aboutUsImg2 from '../../img/aboutus/aboutus2.jpg'
import aboutUsImg3 from '../../img/aboutus/aboutus3.jpg'


class AboutUs extends Component {
	componentDidMount() {
		document.title = "About Us | Great Design Co."

	  window.scrollTo(0, 0)

	  //ScrollReveal
    sr.reveal(this.gdcMain, srMainConfig);
	}
	
  render () {
	  return (
	  	<div ref={(r) => { this.gdcMain = r; }}>
				<Slider>
					<div>
						<div className="slide-text">
							<h1 className="h1">About Us</h1>
						</div>
						<div className="slide-overlay"></div>
						<img src={heroImg} alt="" />
					</div>
				</Slider>

				<div className="container">
					<section className="u-textcenter">
						<h2 className="h2">About our amazing company.</h2>
						<p>Vestibulum sed facilisis dolor, eget posuere libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</section>

					<hr className="hr" />

					<AboutBox imgSrc={aboutUsImg1} title="Our history">
						<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
						<p>Franzen fixie laborum, keffiyeh pariatur minim listicle polaroid cred affogato. Duis pickled retro you probably haven't heard of them 90's non air plant offal franzen la croix. Raw denim hashtag in slow-carb next level. Kogi ea dreamcatcher affogato fam, knausgaard fingerstache dolore migas kale chips slow-carb pickled freegan sint.</p>
					</AboutBox>

					<AboutBox 
						imgSrc={aboutUsImg2}
						title="Our team">
						<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
						<p>Franzen fixie laborum, keffiyeh pariatur minim listicle polaroid cred affogato. Duis pickled retro you probably haven't heard of them 90's non air plant offal franzen la croix. Raw denim hashtag in slow-carb next level.</p>
					</AboutBox>

					<AboutBox 
						imgSrc={aboutUsImg3}
						title="Our services">
						<p>Knausgaard post-ironic gluten-free pariatur pug pop-up in, actually ramps ut tofu trust fund chillwave. Authentic umami hot chicken tacos lyft four dollar toast trust fund asymmetrical cupidatat cliche dolore portland green juice. Chia palo santo consectetur VHS fam. Aliqua chartreuse kickstarter locavore taxidermy man bun. Unicorn meggings neutra palo santo, anim occaecat DIY pinterest cliche cillum hell of. Offal eu you probably haven't heard of them, marfa iceland etsy mlkshk prism aute ullamco tote bag.</p>
						
						<ul>
							<li>Quis chia polaroid single-origin coffee</li>
							<li>Sint velit ipsum fugiat shoreditch</li>
							<li>Pariatur small batch green juice sriracha </li>
							<li>Yuccie minim duis stumptown</li>
						</ul>
					</AboutBox>

				</div> {/* end .container */}
	    </div>
	  );
  }
}

export default AboutUs