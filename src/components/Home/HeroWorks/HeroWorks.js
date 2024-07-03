import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

import './HeroWorks.css';
import { darkTheme } from '../../../theme';

gsap.registerPlugin(ScrollTrigger);

function HeroWorks() {
  const buttonRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 501px)", () => {
      // desktop setup code here...
      let workanim = gsap.timeline({
        scrollTrigger: {
          trigger: ".works-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        }
      });
      workanim.addLabel("start")
      workanim.to(".works-bottom", { rotateX: 0, rotateY: 0, rotateZ: 0, top: '40%', }, 'start')
      workanim.to(".work-canvas", { opacity: 1, }, 'start')
      workanim.to(".row-1", { translateX: '0rem' }, 'start')
      workanim.to(".row-2", { translateX: '-10rem' }, 'start')
      workanim.to(".row-3", { translateX: '0rem' }, 'start')

      workanim.addLabel("end")
      workanim.to(".row-1", { translateX: '-35rem' }, 'end')
      workanim.to(".row-2", { translateX: '20rem' }, 'end')
      workanim.to(".row-3", { translateX: '-35rem' }, 'end')
    });

    mm.add("(max-width: 500px)", () => {
      // mobile setup code here...
      let workanim = gsap.timeline({
        scrollTrigger: {
          trigger: ".works-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        }
      });
      workanim.addLabel("start")
      workanim.to(".works-bottom", { rotateX: 0, rotateY: 0, rotateZ: 0, top: '40%', }, 'start')
      workanim.to(".work-canvas", { opacity: 1, }, 'start')
      workanim.to(".row-1", { translateX: '0rem' }, 'start')
      workanim.to(".row-2", { translateX: '-95rem' }, 'start')
      workanim.to(".row-3", { translateX: '0rem' }, 'start')

      workanim.addLabel("end")
      workanim.to(".row-1", { translateX: '-95rem' }, 'end')
      workanim.to(".row-2", { translateX: '0rem' }, 'end')
      workanim.to(".row-3", { translateX: '-95rem' }, 'end')
    });
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const distanceX = e.clientX - (rect.left + rect.width / 2);
        const distanceY = e.clientY - (rect.top + rect.height / 2);

        gsap.to(buttonRef.current, {
          x: distanceX * 3,
          y: distanceY * 3,
          background: '#00a2e2',
          color: 'black',
          duration: 0.7,
          ease: 'power3.out',
        });

        gsap.to('.works-btn-text', {
          x: distanceX * 0.25,
          y: distanceY * 0.25,
          duration: 3,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        background: 'transparent',
          color: 'white',
        duration: 3,
        ease: 'elastic.out',
      });


      gsap.to('.works-btn-text', {
        x: 0,
        y: 0,
        duration: 5,
        ease: 'elastic.out',
      });
    };

    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.addEventListener('mousemove', handleMouseMove);
      buttonElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        buttonElement.removeEventListener('mousemove', handleMouseMove);
        buttonElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      <div className='heroworks'>
        <div className='works-wrapper'>
          <div className='works-top'>
            <h2 className='mons'>Selected Works</h2>
            <h5 style={{ fontWeight: 600, }}>Here are some examples of my work.</h5>
            <h6 style={{ fontWeight: 500, textAlign: 'center', }}>(Some images are placeholders used for representing envisioned designs. Actual projects are in progress or pending creation.)</h6>
          </div>
          <div className='works-bottom'>
            <div className='works-row row-1'>
              <div className='work-canvas' id='wc1'></div>
              <div className='work-canvas' id='wc2'></div>
              <div className='work-canvas' id='wc3'></div>
            </div>
            <div className='works-row row-2'>
              <div className='work-canvas' id='wc4'></div>
              <div className='work-canvas' id='wc5'></div>
              <div className='work-canvas' id='wc6'></div>
            </div>
            <div className='works-row row-3'>
              <div className='work-canvas' id='wc7'></div>
              <div className='work-canvas' id='wc8'></div>
              <div className='work-canvas' id='wc9'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='more-works'>
        <h4 style={{textAlign: 'center'}}>Explore all of my work by clicking the button below!</h4>
        <button className='works-button' ref={buttonRef}><Link style={{textDecoration: 'none'}}  to="/works" ><h5 className='works-btn-text'>More works</h5></Link></button>
      </div>
    </>
  );
}

export default HeroWorks;
