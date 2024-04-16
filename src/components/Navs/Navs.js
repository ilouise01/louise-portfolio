import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Navs.css'
import { darkTheme } from '../../theme';
import me from "../../assets/image/me.png"
import BurgerMenu from "../BurgerMenu/BurgerMenu"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Navs({openburger, burgerOpen}) {
  
    useEffect(() => {
     



    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
        <div className='navs'>
            <BurgerMenu openburger={openburger} burgerOpen={burgerOpen}/>
            <h5 className='navlouise mons' style={{WebkitTextStrokeColor: darkTheme.Secondary, }}>LOUISE</h5>
            <div className='socials-container'>
                <FontAwesomeIcon icon={faGithub} size='2xl'/>
                <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
                <FontAwesomeIcon icon={faCircleUser} size='2xl'/>
            </div>
        </div>
        
  );
}

export default Navs;
