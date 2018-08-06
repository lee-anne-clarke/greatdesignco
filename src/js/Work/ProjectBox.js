import React from 'react'
import { Link } from 'react-router-dom'


function ProjectBox(props) {
	return (
		<figure className="projectbox" onClick={props.clickEvent}>
			<img className="projectbox__img" src={props.imgSrc} alt={props.imgAlt} />
			<figcaption className="projectbox__caption effect-inner">
				<h3 className="h3-projectbox">Quis <span>dolor</span></h3>
				<Link className="effect-link" to="/our-work/project">View project</Link>
			</figcaption>
		</figure>
	);
}


export default ProjectBox