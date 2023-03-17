import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import "./styles/main.scss";
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="rick-and-morty">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
