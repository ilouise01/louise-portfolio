import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import LouisePortfolio from '../../../assets/image/projects/Louise.png'
import EasyBank from '../../../assets/image/projects/Easybank.png'
import pic1 from '../../../assets/image/projects/p1.png'
import pic2 from '../../../assets/image/projects/p2.png'
import pic3 from '../../../assets/image/projects/p3.png'
import pic4 from '../../../assets/image/projects/p4.png'
import pic5 from '../../../assets/image/projects/p5.png'

import './Project.css'
import { darkTheme } from '../../../theme';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    const timelines = {};

    const projects = [
      {
        pId: 1,
        pClass: 'pone',
        pName: 'LOUISE PORTOFOLIO',
        pPic: LouisePortfolio,
        enterAnim: 'enteranim1',
        exitAnim: 'exitanim1'
      },
      {
        pId: 2,
        pClass: 'ptwo',
        pName: 'EASYBANK LANDINGPAGE',
        pPic: EasyBank,
        enterAnim: 'enteranim2',
        exitAnim: 'exitanim2'
      },
      {
        pId: 3,
        pClass: 'pthree',
        pName: 'PROJECT THREE',
        pPic: pic1,
        enterAnim: 'enteranim3',
        exitAnim: 'exitanim3'
      },
      {
        pId: 4,
        pClass: 'pfour',
        pName: 'PROJECT FOUR',
        pPic: pic2,
        enterAnim: 'enteranim4',
        exitAnim: 'exitanim4'
      },
      {
        pId: 5,
        pClass: 'pfive',
        pName: 'PROJECT FIVE',
        pPic: pic3,
        enterAnim: 'enteranim5',
        exitAnim: 'exitanim5'
      },
      {
        pId: 6,
        pClass: 'psix',
        pName: 'PROJECT SIX',
        pPic: pic4,
        enterAnim: 'enteranim6',
        exitAnim: 'exitanim6'
      },
      {
        pId: 7,
        pClass: 'pseven',
        pName: 'PROJECT SEVEN',
        pPic: pic5,
        enterAnim: 'enteranim7',
        exitAnim: 'exitanim7'
      },
      
      
    ]
    
    
 
    useEffect(() => {

      projects.forEach(project => {

        gsap.to(`.${project.pClass}`, {
          height: '45lvw',
          width: '80lvw',
          duration: 0.3,
          snap: 0.1,
          scrollTrigger: {
            //onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: "play reverse play reverse",
            markers: false,
            start: 'top center',
            end: 'bottom center',
            trigger: `.${project.pClass}`,
          }
        });
        gsap.to(`.title${project.pClass}`, {
          opacity: 1,
          duration: 0.3,
          translateX: 0,
          snap: 0.1,
          scrollTrigger: {
            //onEnter, onLeave, onEnterBack, onLeaveBack
            toggleActions: "play reverse play reverse",
            markers: false,
            start: '30% center',
            end: 'bottom center',
            trigger: `.${project.pClass}`,
          }
        });

    });


        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='Projects'>
        <div className='proj-pic'>
          <div style={{height: '50lvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 className='mons'>WORKS</h1>
            <h4> Here are some examples of my work. </h4>
          </div>
          {projects.map(projs => (
                  <div style={{height: '60lvw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h2 className={`p-title mons title${projs.pClass}`}>{projs.pName}</h2>
                    <div className={`pp ${projs.pClass}`} style={{background: `url(${projs.pPic}`}} id={projs.pId}></div>
                  </div>
                  ))}
        </div>
    </div>
    
        

    
  );
}

export default Projects;
