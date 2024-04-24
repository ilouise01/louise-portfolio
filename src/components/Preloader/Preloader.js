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
    
  
    
    var ploader = gsap.timeline({ease: 'elastic.out',duration: 2,});
    


    if (!isLoaded) {
      // Animation for while loading
    } else {
      // Animation for when done loading
        ploader.addLabel("start")
        ploader.to('.loadertext .word .char', { translateY: '-10rem', opacity: 0, stagger: 0.02,}, 'start')
        ploader.to('.preloader__spinner', { opacity: 0,}, 'start')
        ploader.to('.preloader', { top: '-100%',}, '<+=0.5')

        
        
        
        
        
        ploader.to('.preloader1', { opacity: 0, onComplete: () => {
          body.classList.remove('disable-scroll')
          
        } })
        
        ploader.fromTo('.navlouise', {opacity: 0, translateY: '-10rem',}, {opacity: 1, translateY: '0rem'}, )
        ploader.fromTo('.one', {width:'0%',}, {width:'100%', duration: '0.3'}, )
        ploader.fromTo('.two', {width:'0%',}, {width:'100%', duration: '0.3'}, )
        ploader.fromTo('.three', {width:'0%',}, {width:'100%', duration: '0.3'}, )
        
        
        
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
