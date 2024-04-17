import React from 'react';
import './Preloader.css';
import { darkTheme } from '../../theme';

const Preloader = ({ progress }) => {
  return (
    <div style={{color: darkTheme.Secondary, background: darkTheme.Primary}} className="preloader-container">
      <div className='text-container'>
        <div style={{display: 'flex', justifyContent: 'center',width:'auto' }}>
          <h1 className='loadingtext'>{progress}%</h1>
          <h1 className='below'>{progress}%</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center',width:'auto'}}>
          <h1 className='loadingtext'>LOADING</h1>
          <h1 className='below'>LOADING</h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
