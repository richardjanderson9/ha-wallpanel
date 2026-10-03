/*
  Path: src/assets/js/userInterface.jsx
  Description: Main user interface layout for the personal website and conditional sections.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.0
  Note: Renders the coming-soon view and, when enabled, the site sections in sequence.
*/

// CSS Imports.
import '../css/index.css'; // Main index styles for the personal website.
// Custom CSS for the user interface layout.
import '../css/comingSoon.css'; // Styles for the coming soon section component.

// React and JSX Component Imports.
import ComingSoon from './ui_components/comingSoon.jsx'; // Coming soon section component for the personal website.

const UserInterface = () => {
  // Force the app to display the coming-soon view only.
  const showComingSoon = true;

  return (
    <div className="user-interface-container">
      {showComingSoon && <ComingSoon />}
    </div>
  );
};

// Export the UserInterface component for use in other parts of the application.
export default UserInterface;