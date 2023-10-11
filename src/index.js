import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your CSS styling here
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root'); // Get the root DOM element where the app will be rendered

// Use createRoot to render your app
const reactRoot = createRoot(root); // Create a React root using the createRoot method

// Render the App component within a React StrictMode
reactRoot.render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);

reportWebVitals(); // Report web vitals for performance monitoring
