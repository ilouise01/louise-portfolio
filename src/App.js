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
    const handleLoad = () => {
      // Set isLoaded to true when all assets are loaded
      setIsLoaded(true);
    };

    // Attach the handleLoad function to the window.onload event
    window.onload = handleLoad;

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.onload = null;
    };
  }, []); 




  

 

  
 
  return (
    <div className="app" style={{background: darkTheme.Primary, color: darkTheme.Secondary}} >
        <Helmet>
            <title>Louise</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no," />
            {/* Add more meta tags as needed */}
        </Helmet>
        <Mouse></Mouse>
        <Router>
        <div>
          {isLoaded ? (
            <h1>All assets are loaded!</h1>
          ) : (
            <h1>Loading...</h1>
          )}
          {/* Your website content goes here */}
        </div>
        
        <Navs openburger={openburger} burgerOpen={burgerOpen} />
        <Menu openburger={openburger} burgerOpen={burgerOpen} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/louise-portfolio" element={<Home />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </Router>
        
    </div>
  );
}

export default App;
