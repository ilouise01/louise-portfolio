import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'

import './Apic.css'
import { darkTheme } from '../../../theme';


function Apic() {

 
    useEffect(() => {
      const alouise = new SplitType('.ilouise, .abtfloat h1', {types: 'words, chars'});
      const alouisechars = alouise.chars;

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='apic'>
        <div className='mp-container'>
            <div className='my-picture'></div>
            <div className='abtfloat'><h1 className='mons'>ABOUT</h1><h1 className='mons'>ME</h1></div>
            <div><h1 className='mons ilouise il1'>IVAN</h1></div>
            <div><h1 className='mons ilouise il2'>LOUISE</h1></div>
        </div>
    </div>
        

    
  );
}

export default Apic;
