import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('App initializing...');

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Render error:', error);
  document.body.innerHTML = `<div style="color: white; padding: 20px;">
    <h1>App failed to load</h1>
    <pre>${error instanceof Error ? error.stack : String(error)}</pre>
  </div>`;
}
