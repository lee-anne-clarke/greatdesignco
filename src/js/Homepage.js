import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderSettings from './carousel/sliderSettings'
import { srMainConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

import ProjectBox from './Work/ProjectBox'

import slideImg1 from '../img/homepage/homepage-slide1.jpg'
import slideImg2 from '../img/homepage/homepage-slide2.jpg'
import slideImg3 from '../img/homepage/homepage-slide3.jpg'
import featuredImg1 from '../img/work/webdev/development1.jpg'
import featuredImg2 from '../img/work/printdesign/printdesign4.jpg'
import featuredImg3 from '../img/work/strategy/strategy5.jpg'
import featuredImg4 from '../img/work/expdesign/expdesign4.jpg'


class Homepage extends Component {
	componentDidMount() {
		document.title = "Great Design Co."

	  window.scrollTo(0, 0)

	  //ScrollReveal
    sr.reveal(this.gdcMain, srMainConfig);
	}
	
  render () {
	  return (
	  	<div ref={(r) => { this.gdcMain = r; }}>
	  		<Slider {...sliderSettings}>
					<div>
						<div className="carousel-text">
							<h1 className="h1">Unexpected, Experienced, Utterly Magnificent</h1>
						</div>
						<div className="carousel-overlay"></div>
				  	<img src={slideImg1} alt="" />
				  </div>

					<div>
						<div className="carousel-text">
							<h1 className="h1">We push the boundaries of design and development</h1>
						</div>
						<div className="carousel-overlay"></div>
				  	<img src={slideImg2} alt="" />
				  </div>

					<div>
						<div className="carousel-text">
							<h1 className="h1">Take a look around and say hello!</h1>
						</div>
						<div className="carousel-overlay"></div>
				  	<img src={slideImg3} alt="" />
				  </div>
				 </Slider>

				<div className="container">
					<section className="u-textcenter">
						<h2 className="h2">An escape from the ordinary.</h2>
						<p>Vestibulum sed facilisis dolor, eget posuere libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</section>

					<hr className="hr" />

					<section className="projects">
						<h2 className="h2">Featured work</h2>

						<div className="inner">
							<ProjectBox 
								imgSrc={featuredImg1}
								imgAlt="featured 1"
								linkUrl="/"
							/>

							<ProjectBox 
								imgSrc={featuredImg2}
								imgAlt="featured 2"
								linkUrl="/"
							/>

							<ProjectBox 
								imgSrc={featuredImg3}
								imgAlt="featured 3"
								linkUrl="/"
							/>

							<ProjectBox 
								imgSrc={featuredImg4}
								imgAlt="featured 4"
								linkUrl="/"
							/>
						</div>
					</section>
				</div> {/* end .container */}
	    </div>
	  );
  }
}

export default Homepage