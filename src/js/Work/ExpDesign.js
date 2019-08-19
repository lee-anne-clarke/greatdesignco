import React, { Component } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './ProjectBox'
import { expDesignData } from './projectBoxData'
import uuid from 'uuid'


class ExpDesign extends Component {
		constructor(props) {
		super(props);
		this.state = { expDesignData }
	}

	render () {
		const { expDesignData } = this.state

		return (
			<WorkSection title="Experience Design">
			
				{expDesignData.map(({ imgSrc, imgAlt }) => (
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


export default ExpDesign