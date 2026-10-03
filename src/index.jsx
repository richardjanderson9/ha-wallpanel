/*
  Path: src/index.jsx
  Description: React bootstrap file that mounts the application root.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.0
  Note: Initializes the root component for the app render cycle.
*/

// Assets Import! (React!).
import React from 'react';
import ReactDOM from 'react-dom/client';

// Assets Import! (Custom React!).
import App from './app.jsx';

// Initialize React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App (no browser checks).
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
