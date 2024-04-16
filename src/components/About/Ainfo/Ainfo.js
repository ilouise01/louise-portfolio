import React, { useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'

import './Ainfo.css'
import { darkTheme } from '../../../theme';


function Ainfo() {
  gsap.registerPlugin(ScrollTrigger);


    useGSAP(() =>{

      let mm = gsap.matchMedia();

      mm.add("(min-width: 501px)", () => {
        // desktop setup code here...
        let i01 = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".ainfo",
            start: "top center",
            end: "bottom bottom",
            
          }
          
        });
        i01.addLabel("start")
        i01.to(".i01",{position: 'sticky', top: '10lvh',}, 'start')
        i01.to(".i02",{position: 'sticky', top: '17lvh',}, 'start')
        i01.to(".i03",{position: 'sticky', top: '24lvh',}, 'start')
        i01.to(".i04",{position: 'sticky', top: '31lvh',}, 'start')
        i01.to(".i05",{position: 'sticky', top: '38lvh',}, 'start')

        let i02 = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".i05",
            start: "80% center",
            end: "110% center",
            
            scrub: 0.3,
          }
          
        });
        i02.addLabel("start")
        i02.to(".ai-container",{opacity: 0,}, 'start')
        
      
      });

      mm.add("(max-width: 500px)", () => {
        // mobile setup code here...
        let i01 = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".ainfo",
            start: "top center",
            end: "bottom bottom",
            
          }
          
        });
        i01.addLabel("start")
        i01.to(".i01",{position: 'sticky', top: '10lvh',}, 'start')
        i01.to(".i02",{position: 'sticky', top: '13lvh',}, 'start')
        i01.to(".i03",{position: 'sticky', top: '17lvh',}, 'start')
        i01.to(".i04",{position: 'sticky', top: '20lvh',}, 'start')
        i01.to(".i05",{position: 'sticky', top: '23lvh',}, 'start')

        let i02 = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".i05",
            start: "center center",
            end: "bottom center",
            
            scrub: 0.3,
          }
          
        });
        i02.addLabel("start")
        i02.to(".ai-container",{opacity: 0,}, 'start')
        
      
      });
      


  
    })

 
    useEffect(() => {
      





        
    return () => {
      // cleanup code before component unmounts
    };
  }, []);

  return (
    <div className='ainfo'>
        <div className='ai-container'>


          <div className='infos i01'>
            <div className='ititle'><h4>ABOUT ME</h4></div>
            <div className='icontainer'>
                <div className='inumber'>
                  <h1 >01.</h1>
                </div>
                <div className='icontent'>
                  <h4 style={{textIndent: '3rem', fontWeight: '600'}}>
                      Hello, my name's Louise, I'm a Freelance Web Developer in both frontend and backend web development, proficient in developing front-end
                    design using, HTML 5, CSS3, and JavaScript. Love bringing designs to life and creating cool, usable experiences
                    for all users. 
                  </h4>
                </div>
            </div>
          </div>
          
          <div className='infos i02'>
            <div className='ititle'><h4>EXPERIENCE</h4></div>
            <div className='icontainer'>
                <div className='inumber'>
                  <h1 >02.</h1>
                </div>
                <div className='icontent'>
                  <div>
                    <h4 style={{fontWeight: '600'}}>
                      Freelance Software Developer
                    </h4>
                    <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                      Apr 2019 - Present
                    </h5>
                    <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                    ◦ Working as a freelance developer specializing in Web-Based systems
                    </h5>
                  </div>
                  <br/>

                  <div>
                    <h4 style={{fontWeight: '600'}}>
                      Front-end Developer
                    </h4>
                    <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                      Teksquad Technologies
                      <br/>
                      May 2020 - Mar 2022
                    </h5>
                    <br/>
                    <h7 style={{fontWeight: '500', opacity: '0.8'}}>
                    ◦ Developed a website's front end using HTML, JS, PHP, and Bootstrap. <br/>
                    ◦ Improved user experience and achieve website objectives by developing site structure, navigation,
                    page optimization, and graphics integration.<br/>
                    ◦ Implemented changes that enhanced the responsiveness and operation of the website.<br/>
                    ◦ Designed both client websites, using scripting languages and content management systems including
                    WordPress.
                    </h7>
                  </div>
                  <br/>
                  
                  
                  
                  
                </div>
            </div>
          </div>

          <div className='infos i03'>
            <div className='ititle'><h4>SKILLS</h4></div>
            <div className='icontainer'>
                <div className='inumber'>
                  <h1 >03.</h1>
                </div>
                <div className='icontent'>
                <h4 style={{fontWeight: '600'}}>
                  •   Web Development  
                  •   HTML5   
                  •   CSS3   
                  •   JavaScript  
                  •   React
                  •   Bootstrap
                  •   MySQL
                  •   Adobe Illustrator
                  •   Adobe Photoshop
                </h4>   
                  
                  
                </div>
            </div>
          </div>

          <div className='infos i04'>
            <div className='ititle'><h4>HONORS & AWARDS</h4></div>
            <div className='icontainer'>
                <div className='inumber'>
                  <h1 >04.</h1>
                </div>
                <div className='icontent'>
                  <h4 style={{fontWeight: '600'}}>
                    TESDA Inter-Regional Skills Competition Bronze Medalist (Web Technologies)
                  </h4>
                  <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                     Issued by Technical Education and Skills Development Authority (TESDA) · Jan 2021
                  </h5>
                  <br/>
                  <h7 style={{fontWeight: '500', opacity: '0.8'}}>
                    Participated in TESDA's inter-regional competition for web technologies which involves various processes in web development such as WordPress development, creating a simple system with CRUD functions using PHP, and designing a website layout.
                  </h7>
                  
                  
                </div>
            </div>
          </div>

          <div className='infos i05'>
            <div className='ititle'><h4>EDUCATION</h4></div>
            <div className='icontainer'>
                <div className='inumber'>
                  <h1 >05.</h1>
                </div>
                <div className='icontent'>
                  <h4 style={{fontWeight: '600'}}>
                    STI College
                  </h4>
                  <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                     Bachelor of Science in Computer Science
                  </h5>
                  <h7 style={{fontWeight: '500', opacity: '0.8'}}>
                    2020 - Jul 2023
                  </h7>

                  <br/>
                  <h4 style={{fontWeight: '600'}}>
                    ACLC College
                  </h4>
                  <h5 style={{fontWeight: '500', opacity: '0.8'}}>
                     Senior Highschool, Information Communication Technology
                  </h5>
                  <h7 style={{fontWeight: '500', opacity: '0.8'}}>
                    2016 - 2018
                  </h7>
                  
                  
                </div>
            </div>
          </div>


        </div>
    </div>
        

    
  );
}

export default Ainfo;
