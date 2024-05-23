import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Apic from './Apic/Apic';
import Ainfo from './Ainfo/Ainfo';
import HomeFooter from '../Home/HomeFooter/HomeFooter';

import './About.css'
import { darkTheme } from '../../theme';


function About({ isLoaded }) {
  useGSAP(() =>{
    let footeranim = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
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
    var menutransition2 = gsap.timeline({ease: 'none',duration: 1,});
    menutransition2.fromTo('.abtfloat h1 .word .char', {translateX:'10rem', opacity: 0,}, {translateX:'0rem', opacity: 1, stagger: 0.02}, 'intro')
    menutransition2.fromTo('.il1 .word .char', {translateY:'-10rem', opacity: 0,}, {translateY:'0rem', opacity: 1, }, '>')
    menutransition2.fromTo('.il2 .word .char', {translateY:'10rem', opacity: 0,}, {translateY:'0rem', opacity: 1, }, '>')
    menutransition2.pause();
    
    const delay = 1500; // Delay in milliseconds
        const timeoutId = setTimeout(() => {
          menutransition2.play();
          console.log('Function executed after delay');
        }, delay);
        
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
