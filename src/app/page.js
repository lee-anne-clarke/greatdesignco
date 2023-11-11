'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Slider from 'react-slick'
import sliderSettings from './components/carousel/sliderSettings'
import { v4 as uuidv4 } from 'uuid';

import ProjectBox from './work/project/ProjectBox'
import slideImg1 from '../img/homepage/homepage-slide1.jpg'
import slideImg2 from '../img/homepage/homepage-slide2.jpg'
import slideImg3 from '../img/homepage/homepage-slide3.jpg'
import featuredImg1 from '../img/work/webdev/development1.jpg'
import featuredImg2 from '../img/work/printdesign/printdesign4.jpg'
import featuredImg3 from '../img/work/strategy/strategy5.jpg'
import featuredImg4 from '../img/work/expdesign/expdesign4.jpg'


export default function Homepage() {

  const [projectBoxes] = useState(
    [
      { 
        imgSrc: featuredImg1,
        imgAlt: 'featured 1' 
      },
      { 
        imgSrc: featuredImg2,
        imgAlt: 'featured 2' 
      },
      { 
        imgSrc: featuredImg3,
        imgAlt: 'featured 3' 
      },
      { 
        imgSrc: featuredImg4,
        imgAlt: 'featured 4' 
      },
    ]
  )


  return (
    <main>
      <Slider {...sliderSettings}>
        <div className="u-relative">
          <div className="slide-text">
            <h1 className="h1 h1--home">Unexpected, Experienced, Utterly Magnificent</h1>
          </div>
          <div className="slide-overlay"></div>
          <Image src={slideImg1} alt="" priority={true} />
        </div>

        <div className="u-relative">
          <div className="slide-text">
            <h1 className="h1 h1--home">We push the boundaries of design and development</h1>
          </div>
          <div className="slide-overlay"></div>
          <Image src={slideImg2} alt="" />
        </div>

        <div className="u-relative">
          <div className="slide-text">
            <h1 className="h1 h1--home">Take a look around and say hello!</h1>
          </div>
          <div className="slide-overlay"></div>
          <Image src={slideImg3} alt="" />
        </div>
      </Slider>


      <div className="container">
        <section className="u-textcenter">
          <h2 className="h2">An escape from the ordinary.</h2>
          <p>Vestibulum sed facilisis dolor, eget posuere libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </section>

        <hr className="hr" />

        <section className="projects">
          <h2 className="h2">Featured work</h2>

          <div className="inner">
            {projectBoxes.map(({ imgSrc, imgAlt }) => (
              <ProjectBox 
                key={uuidv4()}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
              />
            ))}
          </div>
        </section>
      </div> {/* END OF .container */}

      </main>
    );

}
