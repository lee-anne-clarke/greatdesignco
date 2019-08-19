import React, { Component } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './ProjectBox'
import { webDevData } from './projectBoxData'
import uuid from 'uuid'


class WebDev extends Component {
		constructor(props) {
		super(props);
		this.state = { webDevData }
	}

	render () {
		const { webDevData } = this.state

		return (
			<WorkSection title="Web Development">
				{webDevData.map(({ imgSrc, imgAlt }) => (
					<ProjectBox 
						key={uuid()}
						imgSrc={imgSrc}
						imgAlt={imgAlt}
					/>
				))}
			</WorkSection>
		);
	}
}


export default WebDev