import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css'

const Preloader = ({ isLoaded }) => {
  useEffect(() => {
    const body = document.body;
    if (!isLoaded) {
      // Animation for while loading
      gsap.to('.preloader', { opacity: 1,});
      body.classList.add('disable-scroll')
      
    } else {
      // Animation for when done loading
      gsap.to('.preloader', { opacity: 0, duration: 1, onComplete: () => {
        gsap.to('.preloader', { display: 'none',});
        
      } });
      body.classList.remove('disable-scroll')
    }
  }, [isLoaded]);

  return (
    <div className="preloader">
      {/* Your preloader content */}
      <h3 className='mons' style={{color: 'white'}}>Hi there, I'm</h3>
      <h1 className='mons' style={{color: 'white'}}>LOUISE</h1>
      <h5 className='mons' style={{color: 'white'}}>I'm a freelance web developer</h5>
      <div className='preloader__spinner'></div>
      <p className='mons' style={{color: 'white'}}>loading assets please wait</p>
    </div>
  );
};

export default Preloader;
