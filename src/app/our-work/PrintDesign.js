import React, { useState } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './project/ProjectBox'
import { printDesignData } from './project/projectBoxData'
import { v4 as uuidv4 } from 'uuid';


export default function PrintDesign(props) {
	const [data] = useState(printDesignData)

	if (props.visible === true) {
		return (
			<WorkSection title="Print Design">
				{printDesignData.map(({ imgSrc, imgAlt }) => (
					<ProjectBox 
						key={uuidv4()}
						imgSrc={imgSrc}
						imgAlt={imgAlt}
					/>
				))}
			</WorkSection>
		);
	}
}


