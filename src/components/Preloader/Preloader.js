import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

const Preloader = ({ isLoaded }) => {



  useEffect(() => {

    const plouise = new SplitType('.loadertext', {types: 'words, chars'});
    const plouisechars = plouise.chars;

    const body = document.body;
    
    
  
    
    var ploader = gsap.timeline({ease: 'none',duration: 2,});
    


    if (!isLoaded) {
      // Animation for while loading
    } else {
      // Animation for when done loading
        ploader.addLabel("start")
        ploader.to('.loadertext .word .char', { translateY: '-10rem', opacity: 0, stagger: 0.02,}, 'start')
        ploader.to('.preloader__spinner', { opacity: 0,}, 'start')
        ploader.to('.preloader', { top: '-100%',}, '<+=0.5')
        ploader.fromTo('.louise h1 .word .char', {translateY:'10rem', opacity: 0,}, {translateY:'0rem', opacity: 1, stagger: 0.02})
        ploader.fromTo('.dnd h4 strong .word .char, .dnd h4 .word .char', {translateY:'3rem', opacity: 0,}, {translateY:'0rem', opacity: 1, }, )
        ploader.to('.preloader1', { opacity: 0, onComplete: () => {
        body.classList.remove('disable-scroll')
        
      } });
    }
  }, [isLoaded]);

  return (
    <div className="preloader">
      {/* Your preloader content */}
      <div className='pl-container'>
        
        <h1 className='mons loadertext' style={{color: 'white'}}>LOUISE</h1>
        <h3 className='mons loadertext' style={{color: 'white'}}>PORTFOLIO</h3>
        <div className='preloader__spinner'></div>

      </div>
    </div>
  );
};

export default Preloader;
