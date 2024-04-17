import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap from 'gsap'; // Import GSAP
import { darkTheme } from './theme';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works'
import Mouse from './components/Mouse/Mouse'
import {Helmet} from 'react-helmet';
import Preloader from './components/Preloader/Preloader'

import Navs from './components/Navs/Navs';
import Menu from './components/Menu/Menu';

function App() {

  

  const [burgerOpen, setBurgerOpen] = useState(false);

  const openburger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // Preload image using fetch
        await fetch('./assets/image/me-min.png');
        await fetch('./assets/image/banner1080-min.png');
        
        
        
        // Set isLoaded to true when all assets are loaded
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading image:', error);
        setIsLoaded(true); // Proceed even if there's an error
      }
    };
  
    preloadAssets();
  }, []);




  

 

  
 
  return (
    <div className="app" style={{background: darkTheme.Primary, color: darkTheme.Secondary}} >
        <Helmet>
            <title>Louise</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no," />
            {/* Add more meta tags as needed */}
        </Helmet>
        <Mouse></Mouse>
        <Preloader isLoaded={isLoaded} />
        <Router>
        <Navs openburger={openburger} burgerOpen={burgerOpen} />
        <Menu openburger={openburger} burgerOpen={burgerOpen} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
