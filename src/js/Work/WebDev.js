import React from 'react'
import ProjectBox from './ProjectBox'

import webDev1 from '../../img/work/webdev/development1.jpg'
import webDev2 from '../../img/work/webdev/development2.jpg'
import webDev3 from '../../img/work/webdev/development3.jpg'
import webDev4 from '../../img/work/webdev/development4.jpg'
import webDev5 from '../../img/work/webdev/development5.jpg'
import webDev6 from '../../img/work/webdev/development6.jpg'


function WebDev() {
	return (
		<section>
			<h2 className="h2">Web Development</h2>

			<div className="inner">
				<ProjectBox 
					imgSrc={webDev1}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={webDev2}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={webDev3}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={webDev4}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={webDev5}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={webDev6}
					imgAlt=""
				/>
			</div>
		</section>
	);
}


export default WebDev