import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Apic from './Apic/Apic';
import Ainfo from './Ainfo/Ainfo';
import HomeFooter from '../Home/HomeFooter/HomeFooter';

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
        <Ainfo />
        <HomeFooter />
    </div>
        

    
  );
}

export default About;
