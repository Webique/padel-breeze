import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n'; // ✅ Make sure this is before anything using i18n
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/padel-breeze">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
