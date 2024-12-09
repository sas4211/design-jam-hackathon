"use client";


import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartHeaderSidebar() {
  const { isCartOpen, cartItems, openCart, closeCart } = useCart();

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-lg font-bold">Logo</h1>
        <button
          onClick={openCart}
          className="flex items-center space-x-2 text-gray-600"
        >
          <span>🛒</span>
          <span>Cart</span>
        </button>
      </header>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={closeCart} className="text-gray-500">
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/Asgaard sofa 1.png"
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-sm">
                    {item.quantity} x Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                <button className="text-gray-500">✕</button>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Subtotal</span>
            <span className="font-bold">
              Rs.{" "}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 border border-black py-2 rounded-lg">
              View Cart
            </button>
            <button className="flex-1 bg-black text-white py-2 rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
