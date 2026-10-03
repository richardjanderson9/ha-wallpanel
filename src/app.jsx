/*
  Path: src/app.jsx
  Description: Main application shell that composes the interface and monitoring widgets.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.0
  Note: Central component for assembling the primary UI sections.
*/

// Import core UI components
import UserInterface from './assets/js/userInterface.jsx';

// App Component Definition.
function App() {
  return (
    <>
      <UserInterface/>
    </>
  );
}
// Export Component.
export default App;