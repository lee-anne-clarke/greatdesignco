import React, { useState } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './project/ProjectBox'
import { strategyData } from './project/projectBoxData'
import { v4 as uuidv4 } from 'uuid';


export default function Strategy(props) {
	const [data] = useState(strategyData)
	
	if (props.visible === true) {
		return (
			<WorkSection title="Strategy">
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


