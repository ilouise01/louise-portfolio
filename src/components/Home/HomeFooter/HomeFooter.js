import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

import './HomeFooter.css'
import { darkTheme } from '../../../theme';


function HomeFooter() {
  gsap.registerPlugin(ScrollTrigger);
    useGSAP(() =>{
      let footeranim = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".hf",
          start: "top center",
          end: "bottom bottom",
          scrub: 0.3,
          markers: true,
        }
      });
      footeranim.addLabel("start")
      footeranim.to(".hf-content",{ height: '84lvh', width: '84vw' }, 'start')
      
      let footeranimtext = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".hf",
          start: "30% center",
          end: "bottom bottom",
          scrub: 2,
          markers: true,
        }
      });
      footeranimtext.addLabel("text")
      footeranimtext.to(".hf-top, .hf-mid, .hf-bot",{ opacity: '1', }, 'start')
  
    })


  
 
    useEffect(() => {

     

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
        <div className='hf'>
          <div className='hf-content'>
            <div className='hf-top'>
              <div><h6>DESIGNER AND DEVELOPER</h6></div>
              <div><h6>OPEN FOR EMPLOYMENT</h6></div>
            </div>
            <div className='hf-mid'>
              <h5 style={{marginBottom: '1rem',}}></h5>
              <h2 style={{fontWeight: 'bold',marginBottom: '4rem',}}>LOOKING FOR MY NEXT CAREER MOVE!</h2>
              <h6 style={{marginBottom: '1rem',}}>SEND ME A MESSAGE</h6>
              <h5>d.ivanlouise001@gmail.com</h5>
            </div>
            <div className='hf-bot'>
              <div><h6>©2024 | LOUISE </h6></div>
              <div><h6>BACK TO TOP ↑</h6></div>
            </div>
          </div>
        </div>
        

    
  );
}

export default HomeFooter;
