// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const setInitialTheme = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })()
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add the theme initialization script */}
    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
    <App />
  </React.StrictMode>
);