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
        exitAnim: 'exitanim1',
        Link: 'https://ilouise.vercel.app/',
      },
      {
        pId: 2,
        pClass: 'ptwo',
        pName: 'EASYBANK LANDINGPAGE',
        pPic: EasyBank,
        enterAnim: 'enteranim2',
        exitAnim: 'exitanim2',
        Link: 'https://ilouise-easybank.vercel.app/',
      },
      // {
      //   pId: 3,
      //   pClass: 'pthree',
      //   pName: 'PROJECT THREE',
      //   pPic: pic1,
      //   enterAnim: 'enteranim3',
      //   exitAnim: 'exitanim3'
      // },
      // {
      //   pId: 4,
      //   pClass: 'pfour',
      //   pName: 'PROJECT FOUR',
      //   pPic: pic2,
      //   enterAnim: 'enteranim4',
      //   exitAnim: 'exitanim4'
      // },
      // {
      //   pId: 5,
      //   pClass: 'pfive',
      //   pName: 'PROJECT FIVE',
      //   pPic: pic3,
      //   enterAnim: 'enteranim5',
      //   exitAnim: 'exitanim5'
      // },
      // {
      //   pId: 6,
      //   pClass: 'psix',
      //   pName: 'PROJECT SIX',
      //   pPic: pic4,
      //   enterAnim: 'enteranim6',
      //   exitAnim: 'exitanim6'
      // },
      // {
      //   pId: 7,
      //   pClass: 'pseven',
      //   pName: 'PROJECT SEVEN',
      //   pPic: pic5,
      //   enterAnim: 'enteranim7',
      //   exitAnim: 'exitanim7'
      // },
      
      
    ]

          function mousehover(){
            gsap.to('.trail' ,{borderColor: 'transparent',});
            gsap.to('.ball',{backgroundColor: 'transparent',});
            gsap.to('.trail',{backgroundColor: 'transparent',});
            gsap.to('.trail' ,{backgroundColor: '#ffffff', height: '5rem', width: '5rem',});
            gsap.to('#mViewtext',{opacity: 1, duration: 0.1,});
            
          }
          function mouseleave(){
              gsap.to('.trail',{borderColor: '#ffffff',});
              gsap.to('.ball' ,{backgroundColor: '#ffffff',});
              gsap.to('.trail' ,{backgroundColor: 'transparent', height: '15px', width: '15px',});
              gsap.to('#mViewtext',{opacity: 0, duration: 0.1,});
              
              
          }
    
    
 
    useEffect(() => {

      projects.forEach(project => {

        gsap.to(`.${project.pClass}`, {
          height: '43lvw',
          width: '78lvw',
          duration: 0.7,
          snap: 0.1,
          scrollTrigger: {
            //onEnter, onLeave, onEnterBack, onLeaveBack
            scroller: ".Projects",
            toggleActions: "play reverse play reverse",
            markers: false,
            start: 'start center',
            end: 'bottom center',
            trigger: `.${project.pClass}`,
          }
        });
        gsap.to(`.title${project.pClass}`, {
          snap: 0.1,
          scrollTrigger: {
            //onEnter, onLeave, onEnterBack, onLeaveBack
            scroller: ".Projects",
            toggleActions: "play reverse play reverse",
            markers: false,
            start: '30% center',
            end: 'bottom center',
            trigger: `.${project.pClass}`,
            onEnter: function () {
              gsap.to(`.title${project.pClass}`, {
                translateY: '0rem',
                duration: 0.5,
                opacity: 1,
                snap: 0.1,
              });
            },
            onLeave: function () {
              gsap.to(`.title${project.pClass}`, {
                translateY: '10rem',
                duration: 0.5,
                opacity: 0,
                snap: 0.1,
              });
            },
            onEnterBack: function () {
              gsap.to(`.title${project.pClass}`, {
                translateY: '0rem',
                duration: 0.5,
                opacity: 1,
                snap: 0.1,
              });
            },
            onLeaveBack: function () {
              gsap.to(`.title${project.pClass}`, {
                translateY: '-10rem',
                duration: 0.5,
                opacity: 0,
                snap: 0.1,
              });
            },
          }
        });
    });


        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='Projects'>
            <div className='c-outer-overlay'>
              <div className='c-outer-border c-top-left'></div>
              <div className='c-outer-border c-top-right'></div>
              <div className='c-outer-border c-bottom-left'></div>
              <div className='c-outer-border c-bottom-right'></div>
            </div>
            <div className='c-inner-overlay'>
              <div className='proj-name'>
              {projects.map(projs => (
                    <h2 className={`p-title mons title${projs.pClass}`}>{projs.pName}</h2>
                  ))}
              </div>
              <div className='c-inner-border c-top-left'></div>
              <div className='c-inner-border c-top-right'></div>
              <div className='c-inner-border c-bottom-left'></div>
              <div className='c-inner-border c-bottom-right'></div>
            </div>
            {projects.map(projs => (
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', scrollSnapAlign: 'start', height: '100lvh', }}>
                    
                    <div onMouseEnter={mousehover} onMouseLeave={mouseleave} onClick={() => window.open(`${projs.Link}`, '_blank')} className={`pp ${projs.pClass}`} style={{background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${projs.pPic}`}} id={projs.pId}></div>
                  </div>
                  ))}

          
    </div>
    
        

    
  );
}

export default Projects;
