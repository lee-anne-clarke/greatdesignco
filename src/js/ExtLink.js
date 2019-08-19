import React from 'react'


function ExtLink(props) {
	return (
		<a 
		className={props.classes} 
		href={props.url} 
		target="_blank" 
		rel="noreferrer noopener">
			{props.children}
		</a>
	);
}



export default ExtLink