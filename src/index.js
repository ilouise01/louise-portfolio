// Index.js
import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// import { store } from './app/store';
// import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application into the root element
root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>
  );