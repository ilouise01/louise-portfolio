import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'

import './Hero2.css'
import { darkTheme } from '../../theme';


function Hero2() {

 
    useEffect(() => {

      
        gsap.registerPlugin(ScrollTrigger);
        const aboutInfo = new SplitType('.aboutinfo', {types: 'words, chars'});
        const aboutInfo2 = new SplitType('.aboutinfo2', {types: 'words, chars'});
        const chars = aboutInfo.chars;
        const hi = new SplitType('.hi', {types: 'words, chars'});
        const hichars = hi.chars;

        var welcome = gsap.timeline({ defaults: { ease: "power4.out" } });


        welcome.fromTo('.loader', {borderBottomRightRadius: "0% 0%",borderBottomLeftRadius: "0% 0%", height: "100vh"},{borderBottomRightRadius: "70% 35%",borderBottomLeftRadius: "70% 35%",height: "0vh", duration: 1, delay: 1,})
          .fromTo(hichars, {y: 0, opacity: 0,},{y: 0, opacity: 1, stagger: 0.05,})
          .fromTo('.louise h1', {y: 0, opacity: 0,rotationX:60,},{y: 0, opacity: 1,rotationX:0, stagger: 0.05,})
          .fromTo('.dnd h4', {y: 0, opacity: 0,},{y: 0, opacity: 1, stagger: 0.05,})
          


        let heroanim = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".container",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3,
              markers: true,
              snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
              },
            }
          });
          heroanim.addLabel("start")
          heroanim.to(".hero, .about",{xPercent: -100}, 'start')
          heroanim.to(".me",{xPercent: -25, opacity: 1,}, 'start')
          heroanim.to(".herocontainer",{opacity: -2,}, 'start')
          heroanim.fromTo(".about-title", {opacity: 0, translateX: 50},{opacity: 1, translateX: 0},)
          heroanim.fromTo(".abtme", {opacity: 0, translateY: -50},{opacity: 1, translateY: 0},)
          heroanim.addLabel("info")
          heroanim.fromTo(chars, {x: 0, opacity: 0,},{x: 0, opacity: 1, stagger: 0.05, ease: 'power4.inOut'}, 'info')
          heroanim.addLabel("end")
          heroanim.to(".me",{opacity: 1, delay: 1,}, 'end')


          let heroexit = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".test",
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
              markers: true,
              snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
              },
            }
          });
          heroexit.addLabel("start")
          heroexit.to('.me', {y: 150, ease: 'power4.inOut'}, 'start')

          let lmbtn = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".container",
              start: "45% top",
              end: "bottom bottom",
              markers: true,
              toggleActions: "restart none reverse reverse",
            }
          });
          lmbtn.fromTo(".learnmorebtn", {boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)'},{boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)'},)
          
          lmbtn.fromTo(".learnmorebtn", {color: 'transparent'},{color: '#AA9E8B',} )
          lmbtn.to(".learnmorebtn", {border: '1px solid'},)
        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <>
        <div className='loader'>
          <h1 className='mons front-text' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>WELCOME</h1>
        </div>
        <div className='container'>
            <div className='hero-container'>
                <div className='hero panel'>
                  <div className='herocontainer'>
                    <div className='louise'>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>L</h1>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>O</h1>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>U</h1>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>I</h1>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>S</h1>
                      <h1 style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>E</h1>
                    </div>
                  </div>
                  <div className='herocontainer'>
                  <div className='dnd'>
                  <h4>D</h4>
                  <h4>E</h4>
                  <h4>S</h4>
                  <h4>I</h4>
                  <h4>G</h4>
                  <h4>N</h4>
                  <h4>E</h4>
                  <h4>R</h4>
                  &nbsp;
                  <h4>&</h4>
                  &nbsp;
                  <h4>D</h4>
                  <h4>E</h4>
                  <h4>V</h4>
                  <h4>E</h4>
                  <h4>L</h4>
                  <h4>O</h4>
                  <h4>P</h4>
                  <h4>E</h4>
                  <h4>R</h4>
                </div>
                  </div>
                </div>
                <div className='me'></div>
                
                <div className='about panel front'>
                  <div className='left'>
                      <h1 className='about-title front-text' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>ABOUT</h1>
                  </div>
                  <div className='right'>
                    <h5 className='abtme2'>&nbsp;</h5>
                    <h5 className='aboutinfo2 front-text mons' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>
                      I'm a <strong>developer</strong> <strong>and</strong> <strong>designer</strong> who loves bringing designs to life and creating cool, usable experiences for all users.
                    </h5>
                  </div>
                </div>
                <div className='about panel back'>
                <div className='left'>
                      <h1 className='about-title'>ABOUT</h1>
                  </div>
                  <div className='right'>
                    <h5 className='abtme'>ABOUT ME</h5>
                    <h5 className='aboutinfo mons'>
                    I'm a <strong>developer</strong> <strong>and</strong> <strong>designer</strong> who loves bringing designs to life and creating cool, usable experiences for all users.
                    </h5>
                  </div>
                </div>
            </div>
        </div>
        <div className='test'>
          <h3>My works</h3>
        </div>
    </>
        

    
  );
}

export default Hero2;
