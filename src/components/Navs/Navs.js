import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Navs.css'
import { darkTheme } from '../../theme';
import BurgerMenu from "../BurgerMenu/BurgerMenu"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Navs({openburger, burgerOpen,menutransition,menutransition2 }) {
  
    useEffect(() => {
     



    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
        <div className='navs'>
            <BurgerMenu openburger={openburger} burgerOpen={burgerOpen} menutransition={menutransition} menutransition2={menutransition2}/>
            <h4 className='navlouise mons' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>LOUISE</h4>
            <div className='socials-container'>
                <FontAwesomeIcon icon={faGithub} size='2xl'/>
                <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                <FontAwesomeIcon icon={faCircleUser} size='2xl'/>
            </div>
        </div>
        
  );
}

export default Navs;
