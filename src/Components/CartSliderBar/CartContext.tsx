"use client";

// context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a CartItem
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; // URL or path to the product image
};

// Define the context type
type CartContextType = {
  isCartOpen: boolean;
  cartItems: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
};

// Create the context with a default value of `undefined`
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const addToCart = (item: CartItem) =>
    setCartItems((prev) => [...prev, item]);

  return (
    <CartContext.Provider
      value={{ isCartOpen, cartItems, openCart, closeCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
