import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

import './HomeFooter.css'
import { darkTheme } from '../../../theme';


function HomeFooter() {
  


  
 
    useEffect(() => {

     

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
      <div className='hf-wrapper' >
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
      </div>
        

    
  );
}

export default HomeFooter;
