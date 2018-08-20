import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { srMainConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

import heroImg from '../img/404-hero.jpg'


class ErrorPage extends Component {
	componentDidMount() {
		document.title = "Uh Oh! | Great Design Co."

	  window.scrollTo(0, 0)

	  //ScrollReveal
    sr.reveal(this.gdcMain, srMainConfig);
	}
	
  render () {
	  return (
	  	<div ref={(r) => { this.gdcMain = r; }}>
	  		<Slider>
					<div>
						<div className="carousel-text">
							<h1 className="h1 h1--errorpage">404</h1>
							<p><Link className="btn btn--text" to="/">Get me outta here!</Link></p>
						</div>
						<div className="carousel-overlay"></div>
				  	<img src={heroImg} alt="" />
				  </div>
				 </Slider>

				 <div className="container container--errorpage">
					<h1 className="h1 h1--errorpage">404</h1>
					<p><Link className="btn btn--text" to="/">Get me outta here!</Link></p>
				 </div>
	    </div>
	  );
  }
}


export default ErrorPage