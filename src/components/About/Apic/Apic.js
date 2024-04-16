import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'

import './Apic.css'
import { darkTheme } from '../../../theme';


function Apic() {

 
    useEffect(() => {

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='apic'>
        <div className='mp-container'>
            <div className='my-picture'></div>
            <div className='abtfloat'><h1 className='mons'>ABOUT</h1><h1 className='mons'>ME</h1></div>
            <div><h1 className='mons ilouise'>IVAN</h1></div>
            <div><h1 className='mons ilouise'>LOUISE</h1></div>
        </div>
    </div>
        

    
  );
}

export default Apic;
