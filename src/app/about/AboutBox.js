import React, { useEffect } from 'react'
import Image from 'next/image';


export default function AboutBox(props) {
	return (
		<section className="aboutbox">
			<div className="inner">
				<div className="aboutbox__imgwrap">
					<div className="about-img-overlay"></div>
					<Image className="about-img" src={props.imgSrc} alt="" />	
				</div>

				<div className="aboutbox__txt">
					<h2 className="h2">{props.title}</h2>

					<div className={props.textAreaClasses}>
						{props.children}
					</div>

					<button className="btn btn--button btn--toggle" onClick={props.showMoreHandler}>
						{props.btnText}
					</button>
				</div>
			</div>
		</section>

	);
}

