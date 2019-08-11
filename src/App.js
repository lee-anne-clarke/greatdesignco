import React, { Component } from 'react'
import { 
	HashRouter as Router, 
	Route, 
	Switch 
} from 'react-router-dom'

import Waypoint from 'react-waypoint'

import Header from './js/Header'
import Homepage from './js/Homepage'
import AboutUs from './js/AboutUs/AboutIndex'
import Work from './js/Work/WorkIndex'
import Project from './js/Work/Project'
import Footer from './js/Footer'
import ErrorPage from './js/ErrorPage'
import './normalize.min.css'
import './App.css'


class App extends Component {
	headerAddActive() {
		document.querySelector('.header').classList.add('active');
	}

	headerRemoveActive() {
		document.querySelector('.header').classList.remove('active');
	}

  render() {
    return (
			<Router>
				<div>
	        <Header />
	        
		  		<Waypoint
					  onEnter={this.headerRemoveActive}
					  onLeave={this.headerAddActive} />

					<Switch>
				    <Route exact path="/" component={Homepage} />
				    <Route path="/about" component={AboutUs} />
				    <Route path="/our-work/project" component={Project} />
				    <Route path="/our-work" component={Work} />
				    <Route component={ErrorPage} />
			    </Switch>

			    <Footer />
				</div>
      </Router>
    )
  }
}

export default App
