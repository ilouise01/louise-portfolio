import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Projects from './Projects/Projects'
import HomeFooter from '../Home/HomeFooter/HomeFooter';

import './Works.css'
import { darkTheme } from '../../theme';


function Works() {
  gsap.registerPlugin(ScrollTrigger);
    useGSAP(() =>{
      let footeranim = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          scroller: ".works-container",
          trigger: ".hf",
          start: "top center",
          end: "bottom bottom",
          scrub: 0.3,
          markers: 'true',
        }
      });
      footeranim.addLabel("start")
      footeranim.to(".hf-content",{ height: '84lvh', width: '84vw' }, 'start')
      
      let footeranimtext = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          scroller: ".works-container",
          trigger: ".hf",
          start: "30% center",
          end: "bottom bottom",
          scrub: 2,
        }
      });
      footeranimtext.addLabel("text")
      footeranimtext.to(".hf-top, .hf-mid, .hf-bot",{ opacity: '1', }, 'start')
  
    })

  

 
    useEffect(() => {
      window.scrollTo(0, 0);
        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='works'>
        <div className='works-container'>
          <Projects />
          <HomeFooter />
        </div>
    </div>
    
        

    
  );
}

export default Works;
