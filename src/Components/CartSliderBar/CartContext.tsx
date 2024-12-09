"use client"
// context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  isCartOpen: boolean;
  cartItems: Array<any>;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: any) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const addToCart = (item: any) => setCartItems((prev) => [...prev, item]);

  return (
    <CartContext.Provider
      value={{ isCartOpen, cartItems, openCart, closeCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
