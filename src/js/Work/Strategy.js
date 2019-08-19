import React, { Component } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './ProjectBox'
import { strategyData } from './projectBoxData'
import uuid from 'uuid'


class Strategy extends Component {
		constructor(props) {
		super(props);
		this.state = { strategyData }
	}

	render () {
		return (
			<WorkSection title="Strategy">
				{strategyData.map(({ imgSrc, imgAlt }) => (
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


export default Strategy