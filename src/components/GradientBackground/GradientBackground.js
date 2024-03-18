import React, { useEffect } from 'react';
import gsap from 'gsap';
import './GradientBackground.css';

const GradientBackground = () => {
  useEffect(() => {
    var bganim = gsap.timeline({ defaults: { ease: "power4.out", repeat: -1, yoyo: true,duration: 5,} });
    bganim.fromTo('.fade', {opacity: 0.8,},{opacity: 0, stagger: 1,})
    
    

    // Cleanup function to remove the script element on component unmount
    return () => {

    };
  }, []);

  return (
    <div className='mainbg'>
      <div className='circle'></div>
      <div className='bgoverlay'></div>
      <div className='zero fade'></div>
      <div className='one fade'></div>
      <div className='two fade'></div>
      <div className='three fade'></div>
      <div className='four fade'></div>
    </div>
  );
};

export default GradientBackground;
