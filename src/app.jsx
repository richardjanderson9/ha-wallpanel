/*
  Path: src/app.jsx
  Description: Main App component for the React application. Renders both UserInterface and UserTracking components.
  Author: Richard Anderson.
  Last Updated: 26-September-2026.
  Version: 1.3.2.
  Note: Updated with import section comments.
*/

// Import core UI components
import UserInterface from './assets/js/userInterface.jsx';
// Temporary: Imports to ensure functionality.
import UserMonitor from './assets/js/data_components/userMonitor.jsx';
import DeviceChecks from './assets/js/data_components/deviceChecks.jsx';

// App Component Definition.
function App() {
  return (
    <>
      <UserMonitor/>
      <DeviceChecks/>
      <UserInterface/>
    </>
  );
}
// Export Component.
export default App;