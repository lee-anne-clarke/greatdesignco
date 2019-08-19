import React, { Component } from 'react'
import WorkSection from './WorkSection'
import ProjectBox from './ProjectBox'
import { printDesignData } from './projectBoxData'
import uuid from 'uuid'


class PrintDesign extends Component {
		constructor(props) {
		super(props);
		this.state = { printDesignData }
	}

	render () {
		const { printDesignData } = this.state

		return (
			<WorkSection title="Print Design">
			
				{printDesignData.map(({ imgSrc, imgAlt }) => (
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


export default PrintDesign