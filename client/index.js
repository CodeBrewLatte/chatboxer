import React from 'react';
import { createRoot } from 'react-dom/client';

import ChatInterface from './components/chatmodule';
import App from './components/App';

const container = document.getElementById('root');
const chatApp = document.getElementById('chatroot')

if(container) {
const root = createRoot(container);
root.render(<App tab="home" />)
}

if(chatApp) {
    const root = createRoot(chatApp);
    root.render(<ChatInterface tab="app" />) 
}

  
