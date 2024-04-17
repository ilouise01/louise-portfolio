import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoaded }) => {
  return (
    <div className={`preloader ${isLoaded ? 'preloader--hidden' : ''}`}>
      <div className="preloader__spinner"></div>
      <div className="preloader__text">Loading...</div>
    </div>
  );
};

export default Preloader;
