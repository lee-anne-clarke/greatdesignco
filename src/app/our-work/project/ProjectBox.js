import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function ProjectBox(props) {
	return (
		<figure className="projectbox">
			<Image className="projectbox__img" src={props.imgSrc} alt={props.imgAlt} />
			<figcaption className="projectbox__caption effect-inner">
				<h3 className="h3-projectbox">Quis <span>dolor</span></h3>
				<Link className="effect-link" href="/our-work/project">View project</Link>
			</figcaption>
		</figure>
	);
}

