import React from 'react'
import ProjectBox from './ProjectBox'

import printDesign1 from '../../img/work/printdesign/printdesign1.jpg'
import printDesign2 from '../../img/work/printdesign/printdesign2.jpg'
import printDesign3 from '../../img/work/printdesign/printdesign3.jpg'
import printDesign4 from '../../img/work/printdesign/printdesign4.jpg'
import printDesign5 from '../../img/work/printdesign/printdesign5.jpg'
import printDesign6 from '../../img/work/printdesign/printdesign6.jpg'


function PrintDesign() {
	return (
		<section>
			<h2 className="h2">Print Design</h2>

			<div className="inner">
				<ProjectBox 
					imgSrc={printDesign1}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={printDesign2}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={printDesign3}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={printDesign4}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={printDesign5}
					imgAlt=""
				/>

				<ProjectBox 
					imgSrc={printDesign6}
					imgAlt=""
				/>
			</div>
		</section>
	);
}


export default PrintDesign