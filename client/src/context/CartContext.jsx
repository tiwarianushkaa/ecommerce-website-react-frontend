// =====================================
// React Imports
// =====================================
import { createContext, useState, useEffect } from "react";

// =====================================
// Create Context
// =====================================
export const CartContext = createContext();


// =====================================
// Provider
// =====================================
export default function CartProvider({ children }) {

  // Load cart from localStorage (FAANG pattern)
  const [cart, setCart] = useState(() => {

    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];

  });

  // Save cart whenever it changes
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


  // =====================================
  // ADD TO CART
  // =====================================
  const addToCart = (product) => {
  setCart(prev => {
    const existing = prev.find(item => item.id === product.id);

    if (existing) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

  // =====================================
  // INCREASE QUANTITY
  // =====================================
  const increaseQty = (id) => {

    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };


  // =====================================
  // DECREASE QUANTITY
  // =====================================
  const decreaseQty = (id) => {

    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  };


  // =====================================
  // REMOVE ITEM
  // =====================================
  const removeFromCart = (id) => {

    setCart(prev => prev.filter(item => item.id !== id));

  };


  // =====================================
  // CLEAR CART
  // =====================================
  const clearCart = () => setCart([]);


  // =====================================
  // DERIVED VALUES (FAANG BEST PRACTICE)
  // =====================================

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}