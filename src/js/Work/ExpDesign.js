import React from 'react'
import ProjectBox from './ProjectBox'

import expdesign1 from '../../img/work/expdesign/expdesign1.jpg'
import expdesign2 from '../../img/work/expdesign/expdesign2.jpg'
import expdesign3 from '../../img/work/expdesign/expdesign3.jpg'
import expdesign4 from '../../img/work/expdesign/expdesign4.jpg'
import expdesign5 from '../../img/work/expdesign/expdesign5.jpg'
import expdesign6 from '../../img/work/expdesign/expdesign6.jpg'


function ExpDesign() {
	return (
		<section>
			<h2 className="h2">Experience Design</h2>

			<div className="inner">
				<ProjectBox 
					imgSrc={expdesign1}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={expdesign2}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={expdesign3}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={expdesign4}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={expdesign5}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={expdesign6}
					imgAlt=""
				/>
			</div>
		</section>
	);
}


export default ExpDesign