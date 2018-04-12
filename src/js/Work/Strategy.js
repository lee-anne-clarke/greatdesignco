import React from 'react'
import ProjectBox from './ProjectBox'

import strategy1 from '../../img/work/strategy/strategy1.jpg'
import strategy2 from '../../img/work/strategy/strategy2.jpg'
import strategy3 from '../../img/work/strategy/strategy3.jpg'
import strategy4 from '../../img/work/strategy/strategy4.jpg'
import strategy5 from '../../img/work/strategy/strategy5.jpg'
import strategy6 from '../../img/work/strategy/strategy6.jpg'


function Strategy() {
	return (
		<section>
			<h2 className="h2">Strategy</h2>

			<div className="inner">
				<ProjectBox 
					imgSrc={strategy1}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={strategy2}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={strategy3}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={strategy4}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={strategy5}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={strategy6}
					imgAlt=""
				/>
			</div>
		</section>
	);
}


export default Strategy