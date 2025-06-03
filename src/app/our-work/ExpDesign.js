import React, { useState } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './project/ProjectBox'
import { expDesignData } from './project/projectBoxData'
import { v4 as uuidv4 } from 'uuid';


export default function ExpDesign(props) {
	const [data] = useState(expDesignData)
	
	if (props.visible === true) {
		return (
			<WorkSection title="Experience Design">
				{data.map(({ imgSrc, imgAlt }) => (
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


