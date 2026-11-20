import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './AppNew';
import './styles.css';
import './app-new.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
