"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaSearch, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function CartHeaderWithSlider() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    {
      id: "1",
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/images/sofa-1.png",
    },
  ];

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div>
      {/* Header */}
      <nav className="bg-white shadow-md py-4 px-6 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Left Section: Navigation Links */}
          <ul className="flex space-x-8 text-sm lg:text-base font-semibold text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-6 text-lg text-gray-700">
            <FaUser className="hover:text-black cursor-pointer" />
            <FaSearch className="hover:text-black cursor-pointer" />
            <FaHeart className="hover:text-black cursor-pointer" />
            <button
              onClick={toggleCart}
              title="Cart"
              className="flex items-center space-x-2 hover:text-black cursor-pointer"
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                {/* Product Image */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-sm">
                    {item.quantity} x Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                {/* Remove Item Button */}
                <button className="text-gray-500 hover:text-red-500">✕</button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Footer */}
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
            <button className="flex-1 border border-black py-2 rounded-lg hover:bg-gray-100">
              View Cart
            </button>
            <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
