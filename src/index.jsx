/*
  Path: src/index.jsx
  Description: Entry point for the React application.
  Author: Richard Anderson.
  Last Updated: 20-June-2026.
  Version: 1.1.0.
  Note: This file contains both AI-generated (Copilot -- Claude 3.7) and manually added comments for code clarity.
*/

// Assets Import! (React!).
import React from 'react';
import ReactDOM from 'react-dom/client';

// Assets Import! (Custom React!).
import App from './app.jsx';

// Assets Import! (Non-React!).
import './assets/css/index.css';

// Initialize React Root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App (no browser checks).
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
