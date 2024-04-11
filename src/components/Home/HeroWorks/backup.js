import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'


import './HeroWorks.css'
import { darkTheme } from '../../theme';


function HeroWorks() {
    
    gsap.registerPlugin(ScrollTrigger);
 
    useEffect(() => {

      let workanim = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".works-bottom",
              start: "top top",
              end: "bottom center",
              scrub: 0.3,
              markers: true,
              pin: true,
              snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
              },
            }
          });

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='heroworks'>
      <div className='works-wrapper'>
        <div className='works-top'>
          <h2>Selected Works</h2>
        </div>
        <div className='works-bottom'>
          <div className='works-row row-1'>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
          </div>
          <div className='works-row row-2'>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
          </div>
          <div className='works-row row-3'>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
            <div className='work-canvas'></div>
          </div>
        </div>
      </div>
    </div>
        

    
  );
}

export default HeroWorks;
