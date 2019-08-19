import React from 'react'


function WorkSection(props) {
	return (
		<section>
			<h2 className="h2">{props.title}</h2>

			<div className="inner">
				{props.children}
			</div>
		</section>
	);
}


export default WorkSection