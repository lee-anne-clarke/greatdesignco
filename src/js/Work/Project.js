import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { srMainConfig } from '../sr/srConfig'
import sr from '../sr/ScrollReveal'

import ContactUs from '../ContactUs'

import heroImg from '../../img/work/project/project-hero.jpg'
import project1 from '../../img/work/project/project1.jpg'
import project2 from '../../img/work/project/project2.jpg'
import project3 from '../../img/work/project/project3.jpg'
import project4 from '../../img/work/project/project4.jpg'


class Project extends Component {
	componentDidMount() {
		document.title = "Project | Great Design Co."

	  window.scrollTo(0, 0)

	  //ScrollReveal
    sr.reveal(this.gdcMain, srMainConfig);
	}
	
  render () {
  	const bgImg = {
  		backgroundImage: `url(${project2})`
		}

	  return (
	  	<div ref={(r) => { this.gdcMain = r; }}>
	  		<Slider>
					<div>
						<div className="carousel-text">
							<h1 className="h1">Quis dolor</h1>
						</div>
						<div className="carousel-overlay"></div>
				  	<img src={heroImg} alt="" />
				  </div>
				 </Slider>

				<div className="container u-pbottom0">
					<section className="u-textcenter">
						<h2 className="h2">This is the project description page.</h2>
						<p>Vestibulum sed facilisis dolor, eget posuere libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</section>

					<hr className="hr" />
				</div> {/* end .container.u-pbottom0 */}

				<section className="project-area project-area--flex">
					<div className="project-area__imgwrap">
						<img className="u-mw100" src={project1} alt="" />
					</div>

					<div className="project-area__txt">
						<h2 className="h2">Elit duis</h2>
						<p>Iceland bespoke paleo, truffaut next level pug tousled kinfolk bicycle rights id mixtape veniam laboris. Occupy flannel marfa four loko franzen nisi reprehenderit. Iceland minim disrupt mustache. Whatever duis four loko retro nulla marfa tacos 8-bit chicharrones ennui vegan in single-origin coffee. Lyft cornhole iPhone direct trade thundercats, distillery raclette commodo lomo pok pok ut try-hard listicle. Aesthetic banh mi pok pok authentic, anim humblebrag reprehenderit nostrud blue bottle cray williamsburg.</p>
					</div>
				</section>

				<section className="project-area-fullwidth" style={bgImg}>
					<div className="project-area__overlay"></div>
					<div className="project-area__txt container">
						<h2 className="h2 u-textcenter">Pug ad enamel</h2>
						<p>Vice poke sriracha, neutra yuccie jean shorts squid ut fashion axe tumblr street art activated charcoal in. Qui jean shorts aliqua do, cardigan synth bespoke occaecat vape vinyl vice. Normcore trust fund ea squid drinking vinegar. Voluptate hammock prism offal chambray yr artisan tacos ipsum pitchfork. Pug ad enamel pin kitsch, man bun tattooed raw denim 90's four loko fanny pack keytar ex austin keffiyeh retro.</p>
						<p>Direct trade meditation hashtag flexitarian williamsburg kitsch. Ad umami vegan pariatur. +1 knausgaard blue bottle tacos chartreuse, subway tile craft beer narwhal chicharrones. Neutra stumptown asymmetrical aute consectetur plaid. Voluptate chartreuse occupy duis, you probably haven't heard of them venmo health goth esse beard distillery.</p>
					</div>
				</section>

				<section className="project-area project-area--flex">
					<div className="project-area__imgwrap">
						<img className="u-mw100" src={project3} alt="" />
					</div>
					
					<div className="project-area__txt">
						<h2 className="h2">Aliqua ut</h2>
						<p>Iceland bespoke paleo, truffaut next level pug tousled kinfolk bicycle rights id mixtape veniam laboris. Occupy flannel marfa four loko franzen nisi reprehenderit. Iceland minim disrupt mustache. Whatever duis four loko retro nulla marfa tacos 8-bit chicharrones ennui vegan in single-origin coffee. Lyft cornhole iPhone direct trade thundercats, distillery raclette commodo lomo pok pok ut try-hard listicle. Aesthetic banh mi pok pok authentic, anim humblebrag reprehenderit nostrud blue bottle cray williamsburg.</p>
					</div>
				</section>

				<div className="project-area">
					<div className="project-area__imgwrap">
						<img className="u-mw100" src={project4} alt="" />
					</div>
				</div>

				<section className="project-area-fullwidth">
					<div className="project-reachout">
						<h2 className="h2">Let's get started.</h2>
						<p>Reach out to us today.</p>

						<ContactUs />
					</div>
				</section>
	    </div>
	  );
  }
}

export default Project