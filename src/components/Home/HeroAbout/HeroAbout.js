import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'

import './HeroAbout.css'
import { darkTheme } from '../../../theme';

import HeroSkills from './HeroSkills/HeroSkills';
import { useGSAP } from '@gsap/react'





function HeroAbout({timeline}) {
  


  
    useEffect(() => {
      const heroabout1 = new SplitType('.ha-top h2', {types: 'words, chars'});
      const heroaboutchars1 = heroabout1.chars;

      const heroabout2 = new SplitType('.ha-bottom h2', {types: 'words, chars'});
      const heroaboutchars2 = heroabout2.chars;

      let hanim = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".heroabout",
          start: "top 50%",
          end: "bottom bottom",
          scrub: 0.3,
          markers: true,
        }
      });
      hanim.addLabel("start")
      hanim.to('.ha-bottom h2 .word .char',{opacity: 1, stagger: 0.05,})
      



    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
        <div className='heroabout'>
          <div className='ha-container'>
            <div className='ha-top'>
              <h6>ABOUT ME</h6>
              <h2 className='mons' style={{WebkitTextStrokeColor: darkTheme.Secondary,}}>I'm a <strong>developer</strong> and <strong>designer</strong> who loves bringing designs to life, creating cool, usable experiences for all users.</h2>
            </div>
            <div className='ha-bottom'>
              <h6>ABOUT ME</h6>
              <h2 className='mons'>I'm a <strong>developer</strong> and <strong>designer</strong> who loves bringing designs to life, creating cool, usable experiences for all users.</h2>
            </div>
            
          </div>
          <HeroSkills/>
        </div>
  );
}

export default HeroAbout;
