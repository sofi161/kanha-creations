// src/context/CartContext.jsx
import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [open, setOpen] = useState(false);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(items)), [items]);

  const addToCart = item => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setOpen(true);
  };

  const removeFromCart = itemId => { /* similar logic */ };
  const clearCart = () => setItems([]);
  const toggleCart = () => setOpen(o => !o);

  return (
    <CartContext.Provider value={{
      items, addToCart, removeFromCart, clearCart,
      open, toggleCart, setOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}
