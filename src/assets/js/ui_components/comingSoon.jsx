/*
  Path: src/assets/js/ui_components/comingSoon.jsx
  Description: Coming-soon landing section for the personal website.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.0
*/

// Import React library for creating components.
import React from 'react';

const ComingSoon = () => {
  // Extract GitHub URL from importantLinks data (falling back safely if needed)
  const githubUrl = "https://github.com/richardjanderson9/ha-wallpanel"; // Hardcoded for now, can be replaced with dynamic data if needed.

  // Coming Soon Render.
  return (
    <div className="coming-soon-wrapper">
      {/* Page heading with gradient */}
      <h1 className="coming-soon-heading">Coming Soon</h1>
      
      {/* Subtext with typing effect */}
      <p className="coming-soon-sub">Something great is on its way. Check back later!</p>

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

export default ComingSoon;