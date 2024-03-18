import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import './Header.css'
import { darkTheme } from '../../theme';
import myName from '../../assets/image/ivanlouise.png'
import bg from '../../assets/image/asd.png'
import svg from '../../assets/image/LOUISE.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Header({timeline}) {

 
    useEffect(() => {


      timeline.to('.loadingcontainer', { opacity: 0.5, duration: 0.3,delay: 3, })
              .to('.loadingcontainer', { width: '0px', overflow: 'hidden', display: 'none', duration: 0.3,  })
              .to('.onehundred', { height: '0px', overflow: 'hidden', display: 'none', duration: 0.3, delay: 0.5, })
              .to('.onehundred', { width: '0px', duration: 0.1, })
              .to('.Louise', {display: 'flex', duration: 0.1, delay: 0.3  })
              .to('.Lspan', {transform: 'translate(0,0%)', duration: 0.3,  });
      
      
      let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".herocontainer", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees. 
      
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -300);
          // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
          }
        }
      });

      // make the right edge "stick" to the scroll bar. force3D: true improves performance
      gsap.set(".herocontainer", {transformOrigin: "center center", force3D: true});


      
      


    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    
    <div className='container'>
      <div className="content" style={{background: darkTheme.PrimaryOverlay}}>
        <div className='header'>
          <h4 className='logo' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>
            LOUISE 
          </h4>
          {/* <!-- Hamburger Menu --> */}
          <BurgerMenu />
        </div>
        <div className='hero'>
          <div className='me'></div>
          <div className='herocontainer'>
            
            <div>
              <h4 className='hi'>Hi, I'm</h4>
            </div>

          </div>
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
            <div>
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
      </div>
    </div>

    
  );
}

export default Header;
