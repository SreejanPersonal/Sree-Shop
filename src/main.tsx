import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import App from './App.tsx';
import './index.css';

// Initialize Firebase before rendering
try {
  initializeApp(firebaseConfig);
} catch (error) {
  console.error('Failed to initialize Firebase:', error);
  // Continue rendering the app even if Firebase fails
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
