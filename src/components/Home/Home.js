import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Hero from './Hero/Hero';
import HeroAbout from './HeroAbout/HeroAbout'
import HeroWorks from './HeroWorks/HeroWorks';
import HomeFooter from './HomeFooter/HomeFooter';

import './Home.css'
import { darkTheme } from '../../theme';


function Home() {

 
    useEffect(() => {

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='home'>
        <Hero />
        <HeroAbout />
        <HeroWorks />
        <HomeFooter />
    </div>
        

    
  );
}

export default Home;
