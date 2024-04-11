import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Apic from './Apic/Apic';

import './About.css'
import { darkTheme } from '../../theme';


function About() {

 
    useEffect(() => {

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='about'>
        <Apic />
    </div>
        

    
  );
}

export default About;
