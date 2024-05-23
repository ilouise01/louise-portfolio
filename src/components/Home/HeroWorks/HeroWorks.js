import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

import './HeroWorks.css'
import { darkTheme } from '../../../theme';


function HeroWorks() {
    
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() =>{
      let mm = gsap.matchMedia();

      mm.add("(min-width: 501px)", () => {
        // desktop setup code here...
        let workanim = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".works-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          }
        });
        workanim.addLabel("start")
        workanim.to(".works-bottom",{rotateX: 0, rotateY: 0, rotateZ: 0, top: '40%', }, 'start')
        workanim.to(".work-canvas",{opacity: 1,}, 'start')
        workanim.to(".row-1",{translateX: '0rem'}, 'start')
        workanim.to(".row-2",{translateX: '-10rem'}, 'start')
        workanim.to(".row-3",{translateX: '0rem'}, 'start')
        
        workanim.addLabel("end")
        workanim.to(".row-1",{translateX: '-35rem'}, 'end')
        workanim.to(".row-2",{translateX: '20rem'}, 'end')
        workanim.to(".row-3",{translateX: '-35rem'}, 'end')
  
        
      });

      mm.add("(max-width: 500px)", () => {
        // mobile setup code here...
        let workanim = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".works-wrapper",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          }
        });
        workanim.addLabel("start")
        workanim.to(".works-bottom",{rotateX: 0, rotateY: 0, rotateZ: 0, top: '40%', }, 'start')
        workanim.to(".work-canvas",{opacity: 1,}, 'start')
        workanim.to(".row-1",{translateX: '0rem'}, 'start')
        workanim.to(".row-2",{translateX: '-95rem'}, 'start')
        workanim.to(".row-3",{translateX: '0rem'}, 'start')
        
        workanim.addLabel("end")
        workanim.to(".row-1",{translateX: '-95rem'}, 'end')
        workanim.to(".row-2",{translateX: '0rem'}, 'end')
        workanim.to(".row-3",{translateX: '-95rem'}, 'end')
  
        
      });
      
      

  
    })
    useEffect(() => {

      
        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='heroworks'>
      <div className='works-wrapper'>
        <div className='works-top'>
          <h2 className='mons'>Selected Works</h2>
          <h5 style={{fontWeight: 600,}}>Here are some examples of my work.</h5>
          <h5 style={{ fontWeight: 500, textAlign: 'center', }}>(Placeholder images used to represent envisioned designs. Actual projects are in progress or pending creation.)</h5>
        </div>
        <div className='works-bottom'>
          <div className='works-row row-1'>
            <div className='work-canvas' id='wc1'></div>
            <div className='work-canvas' id='wc2'></div>
            <div className='work-canvas' id='wc3'></div>
          </div>
          <div className='works-row row-2'>
            <div className='work-canvas' id='wc4'></div>
            <div className='work-canvas' id='wc5'></div>
            <div className='work-canvas' id='wc6'></div>
          </div>
          <div className='works-row row-3'>
            <div className='work-canvas' id='wc7'></div>
            <div className='work-canvas' id='wc8'></div>
            <div className='work-canvas' id='wc9'></div>
          </div>
        </div>
      </div>
    </div>
        

    
  );
}

export default HeroWorks;
