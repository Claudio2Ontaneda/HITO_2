import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext.jsx';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
