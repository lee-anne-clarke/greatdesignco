import React, { useState } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './project/ProjectBox'
import { strategyData } from './project/projectBoxData'
import { v4 as uuidv4 } from 'uuid';


export default function Strategy(props) {
	if (props.visible === true) {
		const [data] = useState(strategyData)
	
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


