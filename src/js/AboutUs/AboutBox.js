import React, { Component } from 'react'


class AboutBox extends Component {
	componentDidMount() {
		
		// Text truncate
		const smBtns = document.querySelectorAll(".btn--toggle");

		const truncateToggle = function() {
			let linkText = this.innerHTML.toUpperCase();
			if (linkText === "SHOW MORE") {
				this.innerHTML = "Show less";
		    this.previousElementSibling.classList.remove("hideContent");
		    this.previousElementSibling.classList.add("showContent");
			}
			else {
				this.innerHTML = "Show more";
		    this.previousElementSibling.classList.remove("showContent");
		    this.previousElementSibling.classList.add("hideContent");
			}
		};

		for (let i of smBtns) {
			i.addEventListener('click', truncateToggle, false);
		}
	}

	render () {
		const aboutImg = {
			backgroundImage: `url(${this.props.imgSrc})`,
		}

		return (
			<section className="aboutbox inner">
				<div className="aboutbox__imgwrap">
					<div className="about-img" style={aboutImg}></div>
					<div className="about-overlay"></div>
				</div>

				<div className="aboutbox__txt">
					<h2 className="h2">{this.props.title}</h2>

					<div className="content hideContent">
						{this.props.children}
					</div>
					<button className="btn btn--button btn--toggle">Show more</button>
				</div>
			</section>
		);
	}
}


export default AboutBox