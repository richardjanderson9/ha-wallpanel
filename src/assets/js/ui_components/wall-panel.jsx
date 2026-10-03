/*
  Path: src/assets/js/ui_components/wallPanel.jsx
  Description: Wall panel section for the personal website.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.7
*/

// Import React library for creating components.
import React from 'react';

const WallPanel = () => {
  // Extract GitHub URL from importantLinks data (falling back safely if needed)
  const githubUrl = "https://github.com/richardjanderson9/ha-wallpanel"; // Hardcoded for now, can be replaced with dynamic data if needed.

  // Wall Panel Render.
  return (
    <div className="wall-panel-wrapper">
      {/* Page heading with gradient */}
      <h1 className="wall-panel-heading">Wall Panel</h1>
      
      {/* Subtext with typing effect */}
      <p className="wall-panel-sub">Something great is on its way. Check back later!</p>

      {/* GitHub Link Button */}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-button"
      >
        GitHub Repository
      </a>
    </div>
  );
};

export default WallPanel;