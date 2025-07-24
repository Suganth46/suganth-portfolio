import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Find the root DOM element
const container = document.getElementById('root');

// 2. Create a root for the app
const root = createRoot(container);

// 3. Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
