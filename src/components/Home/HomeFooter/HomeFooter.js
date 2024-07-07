import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';

import './HomeFooter.css'
import { darkTheme } from '../../../theme';


function HomeFooter() {
  


  
 
    useEffect(() => {

     

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
      <div className='hf-wrapper' >
        <div className='hf'>
          <div className='hf-content'>
            <div className='hf-top'>
              <div><h6>DESIGNER AND DEVELOPER</h6></div>
              <div><h6>©2024 | LOUISE</h6></div>
            </div>
            <div className='hf-mid'>
              <h3 style={{fontWeight: 'bold', marginBottom: '2rem', width: '80%',}}>LOOKING FOR MY NEXT CAREER MOVE!</h3>
              <h5 style={{fontWeight: 'bold', marginBottom: '2rem'}}>SEND ME A MESSAGE</h5>
              <h5 className='email-btn' onClick={() => window.location.href = 'mailto:d.ivanlouise001@gmail.com'}>d.ivanlouise001@gmail.com</h5>
              <div className='hf-hr'>
                  <div className='hf-ball' onClick={() => window.open('/Ivan_Louise_Delgado_CV.pdf', '_blank')}>
                    <h6>Curriculum Vitae</h6>
                  </div>
              </div>
              <div style={{width: '100%', display: 'flex', textAlign: 'left',  }}>
                <div style={{marginRight: '3rem', flexGrow: 1}}>
                  <h4 style={{fontWeight: 'bold', letterSpacing: '0.5rem'}}>NAVIGATION </h4>
                  <hr style={{width: '100%', background: '#0000004d', height: '1px'}}></hr>
                  <Link style={{textDecoration: 'none',}}  to="/" ><h4>Home </h4></Link>
                  <Link style={{textDecoration: 'none',}}  to="/works" ><h4>Works </h4></Link>
                  <Link style={{textDecoration: 'none',}}  to="/about" ><h4>About </h4></Link>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontWeight: 'bold', letterSpacing: '0.5rem' }}>CONNECT</h4>
                  <hr style={{ width: '100%', background: '#0000004d', height: '1px' }} />
                  <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/ilouise/" target="_blank" rel="noopener noreferrer">
                    <h4>LinkedIn</h4>
                  </a>
                  {/* <a style={{ textDecoration: 'none' }} href="https://www.kalibrr.com" target="_blank" rel="noopener noreferrer">
                    <h4>Kalibrr</h4>
                  </a>
                  <a style={{ textDecoration: 'none' }} href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
                    <h4>Upwork</h4>
                  </a> */}
                </div>

                
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
        

    
  );
}

export default HomeFooter;
