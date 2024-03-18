import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'

import './Hero.css'
import { darkTheme } from '../../theme';


function Hero() {

 
    useEffect(() => {
        const louise = new SplitType('.louise h1', {types: 'words, chars'});
        const louisechars = louise.chars;

        const dnd = new SplitType('.dnd h4', {types: 'words, chars'});
        const dndchars = dnd.chars;

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='hero'>
        <div className='louise'><h1>LOUISE</h1></div>
        <div className='dnd'><h4><strong>DESIGNER</strong>&<strong>DEVELOPER</strong></h4></div>
    </div>
        

    
  );
}

export default Hero;
