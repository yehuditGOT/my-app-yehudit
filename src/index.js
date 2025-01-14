import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// יצירת הסטור מתוך CreateStor

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);
