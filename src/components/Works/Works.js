import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Projects from './Projects/Projects'
import HomeFooter from '../Home/HomeFooter/HomeFooter';

import './Works.css'
import { darkTheme } from '../../theme';


function Works() {

  

 
    useEffect(() => {

        
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
