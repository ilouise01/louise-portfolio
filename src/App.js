import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'; // Import GSAP
import { darkTheme } from './theme';
import Home from './components/Home/Home';
import Mouse from './components/Mouse/Mouse'
import {Helmet} from 'react-helmet';


function App() {
  

  const canvasRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track if the content is loaded
  //gsap timeline
  let tl = new gsap.timeline({defaults:{ease: 'back.out',}}); //gsap timeline
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Your WebGL code or any other setup code should go here, referencing 'canvas'.
  }, []);

  // Define the function to increment loadingProgress
  const incrementProgress = () => {
    if (loadingProgress < 100) {
      setLoadingProgress((prevProgress) => prevProgress + 1);
    }
  };

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    // Set up a timer to increment loadingProgress
    const timer = setInterval(incrementProgress, 10);

    return () => {
      clearInterval(timer); // Clear the interval when the component unmounts
      setIsLoaded(true);
      // Use loadingProgress in your GSAP animation
      var fillpercent = `polygon(0 ${100-loadingProgress}%, 100% ${100-loadingProgress}%, 100% 100%, 0% 100%)`;
      tl.to('.loadingtext', { clipPath: fillpercent, duration: 1 });
      
    };
  }, [loadingProgress]);

  

  useEffect(() => {
    if (isLoaded) {
      // Trigger your GSAP animation when content is loaded (loadingProgress = 100)
      tl.to('.preloader-container', { opacity: 0, display: 'none', duration: 0, delay: 0, onComplete: () => {
        
      } })
      .from('.logo', {xPercent: -120, opacity: 0, duration: 0.3, })
      .from('.one , .two , .three', {width: '0%', duration: 0.3, stagger: 0.3,})
    }
  }, [isLoaded]);
 
  return (
    <div className="app" style={{background: darkTheme.Primary, color: darkTheme.Secondary}} >
        <Helmet>
            <title>Louise</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no," />
            {/* Add more meta tags as needed */}
        </Helmet>
        <Mouse></Mouse>
        <Home />
    </div>
  );
}

export default App;
