import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import Hero from '../Hero/Hero';
import HeroAbout from '../HeroAbout/HeroAbout'
import Navs from '../Navs/Navs'
import Menu from '../Menu/Menu'
import HeroWorks from '../HeroWorks/HeroWorks';

import './Home.css'
import { darkTheme } from '../../theme';


function Home() {

 
    useEffect(() => {

        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='home'>
        <Navs />
        <Menu/>
        <Hero />
        <HeroAbout />
        <HeroWorks />
        <div style={{height: '100lvh', width: '100vw', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <h1>C====3</h1>
        </div>
    </div>
        

    
  );
}

export default Home;
