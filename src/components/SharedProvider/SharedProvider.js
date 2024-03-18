// SharedProvider.js
import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <SharedContext.Provider value={{ message, handleClick }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
