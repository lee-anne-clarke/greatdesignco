import React, { useState } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './project/ProjectBox'
import { webDevData } from './project/projectBoxData'
import { v4 as uuidv4 } from 'uuid';


export default function WebDev(props) {
	if (props.visible === true) {
		const [data] = useState(webDevData)

		return (
			<WorkSection title="Web Development">
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


