// external dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';



// style dependencies
import './index.css';

// internal components
import App from './App';

// web-vitals library calls our reportHandler every time a
// new metric value is available
import reportWebVitals from './reportWebVitals';

// binding the App component with the 'root' element in HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();