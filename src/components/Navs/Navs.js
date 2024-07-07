import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Navs.css';
import { darkTheme } from '../../theme';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Navs({ openburger, burgerOpen, menutransition, menutransition2 }) {
  const navicons = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, icon) => {
      const rect = icon.getBoundingClientRect();
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(icon, {
        x: distanceX * 3,
        y: distanceY * 3,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.to('.trail', { borderColor: '#00a2e2' });
      gsap.to('.ball', { backgroundColor: '#00a2e2' });
      gsap.to('.trail', { backgroundColor: '#00a2e2' });
      gsap.to('.trail', { backgroundColor: '#00a2e2', opacity: '1', height: '45px', width: '45px' });
    };

    const handleMouseLeave = (icon) => {
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 2,
        ease: 'elastic.out',
      });

      gsap.to('.trail', { borderColor: '#ffffff' });
      gsap.to('.ball', { backgroundColor: '#ffffff' });
      gsap.to('.trail', { backgroundColor: 'transparent', opacity: '1', height: '15px', width: '15px' });
    };

    navicons.current.forEach(icon => {
      const onMouseMove = (e) => handleMouseMove(e, icon);
      const onMouseLeave = () => handleMouseLeave(icon);

      icon.addEventListener('mousemove', onMouseMove);
      icon.addEventListener('mouseleave', onMouseLeave);

      icon.cleanup = () => {
        icon.removeEventListener('mousemove', onMouseMove);
        icon.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    return () => {
      navicons.current.forEach(icon => {
        icon.cleanup();
      });
    };
  }, []);

  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='navs'>
      <BurgerMenu openburger={openburger} burgerOpen={burgerOpen} menutransition={menutransition} menutransition2={menutransition2} />
      <h4 className='navlouise mons' style={{ WebkitTextStrokeColor: darkTheme.Secondary }}>
        <Link style={{ textDecoration: 'none', WebkitTextStrokeColor: darkTheme.Secondary, color: 'transparent' }} to="/">LOUISE</Link>
      </h4>
      <div className='socials-container'>
        {/* <FontAwesomeIcon
          ref={el => navicons.current[0] = el}
          className='navicon'
          icon={faGithub}
          size='2xl'
          onClick={() => handleIconClick('https://github.com/your-profile')}
        /> */}
        <FontAwesomeIcon
          ref={el => navicons.current[1] = el}
          className='navicon'
          icon={faLinkedin}
          size='2xl'
          onClick={() => handleIconClick('https://www.linkedin.com/in/ilouise/')}
        />
        <FontAwesomeIcon
          ref={el => navicons.current[2] = el}
          className='navicon'
          icon={faCircleUser}
          size='2xl'
          onClick={() => handleIconClick('/Ivan_Louise_Delgado_CV.pdf', '_blank')}
        />
      </div>
    </div>
  );
}

export default Navs;
