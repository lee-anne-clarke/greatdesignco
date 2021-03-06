import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import uuid from 'uuid'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import srMainConfig from '../sr/srConfig'
import sr from '../sr/ScrollReveal'
import Scroll from 'react-scroll'

import PrintDesign from './PrintDesign'
import WebDev from './WebDev'
import Strategy from './Strategy'
import ExpDesign from './ExpDesign'

import heroImg from '../../img/work/work-hero.jpg'

//Variables necessary for react-scroll
let Events     = Scroll.Events
let scrollSpy  = Scroll.scrollSpy
let scroller   = Scroll.scroller
let Element    = Scroll.Element


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workNavItems: [
			{ 
				url: 'print-design',
				btnText: 'Print Design' 
			},
			{ 
				url: 'development',
				btnText: 'Web Development'
			},
			{ 
				url: 'strategy',
				btnText: 'Strategy'
			},
			{ 
				url: 'exp-design',
				btnText: 'Experience Design'
			},
     ],
    }
  }

	componentDidMount() {
		document.title = "Work | Great Design Co."

	  window.scrollTo(0, 0)

	  //react-scroll
	  scrollSpy.update();

	  //ScrollReveal
    sr.reveal(this.gdcMain, srMainConfig);
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	scrollToWorkSubs() {
		scroller.scrollTo('workSubsAnchor', {smooth: true,});
	}

  render () {
  	const { workNavItems } = this.state

	  return (
	  	<div ref={(r) => { this.gdcMain = r; }}>
	  		<Slider>
				<div>
					<div className="slide-text">
					<h1 className="h1">Our Work</h1>
				</div>
				<div className="slide-overlay"></div>
					<img src={heroImg} alt="" />
				</div>
			</Slider>

			<div className="container">
				<nav>
					<ul className="navlist navlist--work">

						{workNavItems.map(({ url, btnText }) => (
							<li className="nav-li nav-li--work" key={uuid()}>
								<NavLink 
									className="btn btn--nav btn--nav-secondary" 
									to={`${this.props.match.url}/${url}`} 
									onClick={this.scrollToWorkSubs}>
									{btnText}
								</NavLink>
							</li>
						))}
						<div className="navlist--work__bar"></div>
					</ul>
				</nav>

				<hr className="hr hr--work" />

				<div className="u-textcenter">
					<Element name="workSubsAnchor" className="anchor" />

					<p>Check out our amazing work from a variety of industries.</p>

					<Switch>
						<Route exact path={`${this.props.match.path}`} />
						<Route path={`${this.props.match.path}/print-design`} component={PrintDesign} />
						<Route path={`${this.props.match.path}/development`} component={WebDev} />
						<Route path={`${this.props.match.path}/strategy`} component={Strategy} />
						<Route path={`${this.props.match.path}/exp-design`} component={ExpDesign} />
						<Route render={ () => <Redirect to="/404" /> } />
					</Switch>
				</div>

			</div> {/* end .container */}
	    </div>
	  );
  }
}


export default Work