import React from 'react';
import ReactDOM from 'react-dom/client';
import '@exampledev/new.css'
import App from './App';
import Header from './Header';
import './myStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

