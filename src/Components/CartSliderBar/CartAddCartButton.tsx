// components/AddToCartButton.tsx

import { useCart } from "./CartContext";


export default function AddToCartButton({ item }: { item: string }) {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    openCart();
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
    >
      Add to Cart
    </button>
  );
}
