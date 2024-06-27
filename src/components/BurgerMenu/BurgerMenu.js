import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BurgerMenu.css'
import { darkTheme } from '../../theme';

function BurgerMenu({ openburger, burgerOpen, menutransition,menutransition2}) {
  
    

    const hamtl = useRef()
    const menutl = useRef()

    
    function burgerhover(){
        gsap.to('.trail' ,{borderColor: 'transparent',});
        gsap.to('.ball',{backgroundColor: 'transparent',});
        gsap.to('.trail',{backgroundColor: 'transparent',});
        gsap.to('.trail' ,{backgroundColor: '#ffffff', opacity: '0.5', height: '35px', width: '35px',});
        
    }
    function burgerleave(){
        gsap.to('.trail',{borderColor: '#ffffff',});
        gsap.to('.ball' ,{backgroundColor: '#ffffff',});
        gsap.to('.trail' ,{backgroundColor: 'transparent', opacity: '1', height: '15px', width: '15px',});
        
        
    }
    


  useEffect(() => {
    
    hamtl.current = gsap.timeline({
      paused: true,
      yoyo: true,
      defaults: { 
         duration: 0.15, delay: 0, ease: "back.out" 
      }
    })
    hamtl.current.to('.one', { rotate: 0,top: "25%", })
    .to('.two', { rotate: 0,  } , "<")
    .to('.three', { rotate: 0,top: "75%",  } , "<")
    .to('.one', { top: "50%", })
    .to('.three', { top: "50%",  } , "<")
    .to('.one', { rotate: 135, })
    .to('.two', {rotate: 135, }, "<")
    .to('.three', {rotate: 135, } , "<")
    .to('.one', { rotate: 225, })





    menutl.current = gsap.timeline({
      paused: true,
      yoyo:true,
      defaults: {
        ease: "power4.inOut",
        duration: 0.2, 
      },
    
    })
            menutl.current.to('.menu',{display: 'flex', })
            .add('slide')
            menutl.current.to('.menu',{left: '0%',}, 'slide')
            menutl.current.to('.menu-circle',{left: '115%',rotate: -15,}, 'slide')
            menutl.current.to('.menu-circle',{left: '-20%',rotate: 0,})

            .add('reveal')
            menutl.current.to('.menu-container',{left: '115%',}, 'reveal')
            
            .add('menuitems1')
            menutl.current.to('.menu-container h2',{translateX: -100, duration: 0.01,}, 'menuitems1')
            menutl.current.to('.menu-container h2 h5',{opacity: 0, translateX: 300,duration: 0.01,}, 'menuitems1')

            .add('menuitems2')
            menutl.current.to('.menu-circle',{left: '70%',borderRadius: '100rem', duration: 0.5}, 'menuitems2')
            menutl.current.to('.menu-container h2',{opacity: 1,translateX: 0, stagger: 0.1, delay: 0.5,}, 'menuitems2')
            menutl.current.to('.menu-container h2 h5',{opacity: 1,translateX: 0, stagger: 0.1,}, 'menuitems2')

            menutl.current.to('.menu-container h2 .h5parent .hr',{width: '50%', stagger: -0.1},)

    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  useEffect(() => {
    const body = document.body;

    burgerOpen ? hamtl.current.play() : hamtl.current.reverse()
    burgerOpen ? menutl.current.play() : menutl.current.reverse()
    // burgerOpen ? menutransition.play() : menutransition.play()
    // burgerOpen ? menutransition2.play() : menutransition2.play()
    burgerOpen ? body.classList.add('disable-scroll') : body.classList.remove('disable-scroll')

  }, [burgerOpen])
  







  return (
    <div className='burgercontainer'>
        <a className="McButton" data="hamburger-menu" onClick={openburger} onMouseEnter={burgerhover} onMouseLeave={burgerleave}>
                <b className='one' style={{background: darkTheme.Secondary}}></b>
                <b className='two' style={{background: darkTheme.Secondary}}></b>
                <b className='three' style={{background: darkTheme.Secondary}}></b>
        </a>
    </div>

  );
}

export default BurgerMenu;
