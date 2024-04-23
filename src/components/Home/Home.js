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
        
        var menutransition = gsap.timeline({ease: 'none',duration: 2,});
        menutransition.addLabel("intro")
        menutransition.fromTo('.louise h1 .word .char', {translateY:'10rem', opacity: 0,}, {translateY:'0rem', opacity: 1, stagger: 0.02}, 'intro')
        menutransition.fromTo('.dnd h4 strong .word .char, .dnd h4 .word .char', {translateY:'3rem', opacity: 0,}, {translateY:'0rem', opacity: 1, }, '>')
        menutransition.pause();

        const delay = 650; // Delay in milliseconds
        const timeoutId = setTimeout(() => {
          menutransition.play();
          console.log('Function executed after delay');
        }, delay);

      
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
