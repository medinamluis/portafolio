// ============================
// Original React App template:
// ============================

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from './components/Context';
import App from './components/App';   // updated with the socreboard project's App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  // REMOVED: React.StricMode combined with useState causes component to render twice: AN INTENTIONAL FEATURE OF StrictMode (resulting in the counter jumping in steps of 2). See https://github.com/facebook/react/issues/15074
  <Provider>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ===============================
// From Treehouse's Score project:
// ===============================

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App';
// import './index.css';

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );
