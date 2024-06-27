import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Mouse.css';

function MyComponent(props) {
  useEffect(() => {
    gsap.set('.ball', { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup code before component unmounts
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;


    

    gsap.to('#ball', {
      duration: 0,
      x: mouseX - scrollX,
      y: mouseY - scrollY,
      ease: 'none',
      overwrite: 'auto',
      stagger: 0,
    });

    gsap.to('#trail', {
      duration: 1,
      x: mouseX - scrollX,
      y: mouseY - scrollY,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto',
      stagger: 0,
    });

    gsap.to('#mViewtextContainer', {
      duration: 0.3,
      x: mouseX - scrollX,
      y: mouseY - scrollY,
      ease: 'elastic.out(1, 0.3)',
      overwrite: 'auto',
      stagger: 0,
    });

    
  };

  return (
    <div>
      <div className="ball" id="ball"></div>
      <div className='ball' id='mViewtextContainer'>
        <h6 id='mViewtext'>VIEW</h6>
      </div>
      <div className="ball trail" id="trail">
      </div>
    </div>
  );
}

export default MyComponent;
