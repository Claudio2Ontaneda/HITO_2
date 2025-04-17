import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === pizza.id);
      if (exists) {
        return prev.map(p =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      } else {
        return [...prev, { ...pizza, count: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const changeCount = (id, delta) => {
    setCart(prev => prev.map(p =>
      p.id === id ? { ...p, count: Math.max(p.count + delta, 0) } : p
    ).filter(p => p.count > 0));
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeCount, total }}>
      {children}
    </CartContext.Provider>
  );
};