import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { Link } from 'react-router-dom';

import './Menu.css'
import { darkTheme } from '../../theme';


function Menu({ openburger }) {
    var menutransition = gsap.timeline({ease: 'none',duration: 2,});
  
    const menuhover = (event) => {
        const hoveredElement = event.currentTarget;
        console.log('hovered');
        const h5Elements = hoveredElement.querySelectorAll('.h5parent h5');
        const h5hr = hoveredElement.querySelectorAll('.h5parent .hr .hr-progress');
        const hlink = hoveredElement.querySelectorAll('a');
        gsap.to(hlink, { color: 'transparent', });
        gsap.to(h5Elements, { translateY: -20 });
        gsap.to(h5hr, { width: '100%', duration: 0.2, });
    };

    const menuleave = (event) => {
        const hoveredElement = event.currentTarget;
        console.log('leave');
        const h5Elements = hoveredElement.querySelectorAll('.h5parent h5');
        const h5hr = hoveredElement.querySelectorAll('.h5parent .hr .hr-progress');
        const hlink = hoveredElement.querySelectorAll('a');
        gsap.to(hlink, { color: 'white', });
        gsap.to(h5Elements, { translateY: 0 });
        gsap.to(h5hr, { width: '0%' });
    };

    const menuclick = (event) => {
        // bring window top of page on menu click
        window.scrollTo(0, 0);
        

    };

    

 
    useEffect(() => {
        

       


    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='menu'>
        <div className='menu-container'>
            <h2 style={{WebkitTextStrokeColor: darkTheme.Secondary, }} className='menu-link mons' onMouseEnter={menuhover} onMouseLeave={menuleave}><Link className='mons' to="/" onClick={() => {openburger();menuclick();}} >HOME</Link><div className='h5parent'><div className='hr'><div className='hr-progress'></div></div><h5>01</h5></div></h2>
            <h2 style={{WebkitTextStrokeColor: darkTheme.Secondary, }} className='menu-link mons' onMouseEnter={menuhover} onMouseLeave={menuleave}><Link className='mons' to="/about" onClick={() => {openburger();menuclick();}} >ABOUT</Link><div className='h5parent'><div className='hr'><div className='hr-progress'></div></div><h5>02</h5></div></h2>
            {/* <h2 style={{WebkitTextStrokeColor: darkTheme.Secondary, }} className='menu-link mons' onMouseEnter={menuhover} onMouseLeave={menuleave}><Link className='mons' to="/works" onClick={() => {openburger();menuclick();}} >WORKS</Link><div className='h5parent'><div className='hr'><div className='hr-progress'></div></div><h5>03</h5></div></h2> */}
            {/* <h2 style={{WebkitTextStrokeColor: darkTheme.Secondary, }} className='menu-link mons' onMouseEnter={menuhover} onMouseLeave={menuleave}>CONTACT<div className='h5parent'><div className='hr'><div className='hr-progress'></div></div><h5>04</h5></div></h2> */}
        </div>
        <div className='menu-circle'></div>
    </div>
        

    
  );
}

export default Menu;
