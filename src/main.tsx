import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.css';
import App from './App';
import { CardContextProvider } from "./context/cardContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>
)