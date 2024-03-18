import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import './BurgerMenu.css'
import { darkTheme } from '../../theme';

function BurgerMenu({timeline}) {
  
    const [burgerOpen, setBurgerOpen] = useState(false);

    var menu = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.3, }, paused: true, yoyo:true, });
        



    let ham = new gsap.timeline({paused: true, yoyo:true, defaults: {  duration: 0.15, delay: 0, ease: "back.out" } });
    
    function burgerhover(){
        gsap.to('.trail' ,{borderColor: 'transparent',});
        gsap.to('.ball',{backgroundColor: 'transparent',});
        gsap.to('.trail',{backgroundColor: 'transparent',});
        gsap.to('.trail' ,{backgroundColor: '#ffffff', opacity: '0.2', height: '35px', width: '35px',});
        
    }
    function burgerleave(){
        gsap.to('.trail',{borderColor: '#ffffff',});
        gsap.to('.ball' ,{backgroundColor: '#ffffff',});
        gsap.to('.trail' ,{backgroundColor: 'transparent', opacity: '1', height: '15px', width: '15px',});
        
        
    }
    function openburger() {
        if (burgerOpen) {
            ham.play();
            menu.play();
            
            setBurgerOpen(false);
             ham.to('.one', { rotate: 225, })
                
                .to('.one', { rotate: 135, })
                .to('.two', {rotate: 135, }, "<")
                .to('.three', {rotate: 135, } , "<")

                .to('.one', { rotate: 0, })
                .to('.two', {rotate: 0, }, "<")
                .to('.three', {rotate: 0, } , "<")

                .to('.one', { top: "50%", }, "<")
                .to('.three', { top: "50%",  } , "<")
                
                .to('.one', { rotate: 0,top: "25%", })
                .to('.two', { rotate: 0,  } , "<")
                .to('.three', { rotate: 0,top: "75%",  } , "<")

                menu.fromTo('.menu-container h2 .h5parent .hr',{width: '50%'},
                {width: '0%', stagger: 0.1}, )

                .add('menuitems')
                menu.fromTo('.menu-container h2 h5',{opacity: 1,translateX: 0,}
                 ,{opacity: 0, translateX: 300, stagger: 0.1}, 'menuitems')
                menu.fromTo('.menu-container h2',{opacity: 1,translateX: 0, }
                ,{opacity: 0, translateX: -100,stagger: 0.1,}, 'menuitems')

                .add('reveal')
                menu.to('.menu-circle',{left: '115%',rotate: -15, }, 'reveal')
                menu.to('.menu',{left: '100%',},)
                menu.to('.menu',{display: 'none'},)

                

        } else {
          ham.play();
          menu.play();
          setBurgerOpen(true);
          ham.to('.one', { rotate: 0,top: "25%", })
            .to('.two', { rotate: 0,  } , "<")
            .to('.three', { rotate: 0,top: "75%",  } , "<")
            .to('.one', { top: "50%", })
            .to('.three', { top: "50%",  } , "<")
            .to('.one', { rotate: 135, })
            .to('.two', {rotate: 135, }, "<")
            .to('.three', {rotate: 135, } , "<")
            .to('.one', { rotate: 225, })

            menu.to('.menu',{display: 'flex', })
            .add('slide')
            menu.to('.menu',{left: '0%',}, 'slide')
            menu.to('.menu-circle',{left: '115%',rotate: -15,}, 'slide')
            menu.to('.menu-circle',{left: '-20%',rotate: 0,})

            .add('reveal')
            menu.to('.menu-container',{left: '115%',}, 'reveal')
            
            .add('menuitems1')
            menu.to('.menu-container h2',{translateX: -100, duration: 0.01,}, 'menuitems1')
            menu.to('.menu-container h2 h5',{opacity: 0, translateX: 300,duration: 0.01,}, 'menuitems1')

            .add('menuitems2')
            menu.to('.menu-circle',{left: '60%',borderRadius: '100rem', duration: 1}, 'menuitems2')
            menu.to('.menu-container h2',{opacity: 1,translateX: 0, stagger: 0.1, delay: 0.5,}, 'menuitems2')
            menu.to('.menu-container h2 h5',{opacity: 1,translateX: 0, stagger: 0.1,}, 'menuitems2')

            menu.to('.menu-container h2 .h5parent .hr',{width: '50%', stagger: -0.1},)
        }
      }
    


  useEffect(() => {
    

    return () => {
      // cleanup code before component unmounts
    };
  }, []);







  return (
    <div className='burgercontainer'>
        <a class="McButton" data="hamburger-menu" onClick={openburger} onMouseEnter={burgerhover} onMouseLeave={burgerleave}>
                <b className='one' style={{background: darkTheme.Secondary}}></b>
                <b className='two' style={{background: darkTheme.Secondary}}></b>
                <b className='three' style={{background: darkTheme.Secondary}}></b>
        </a>
    </div>

  );
}

export default BurgerMenu;
