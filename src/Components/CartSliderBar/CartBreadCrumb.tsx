// components/Breadcrumb.js
import Link from "next/link";

const CartBreadcrumb = () => {
  return (
    <nav
      className="flex items-left justify-left space-x-2 text-gray-600 text-lg"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="hover:text-blue-500 font-normal"
      >
        Home
      </Link>
      <span className="text-gray-400">&gt;</span>
      <Link
        href="/shop"
        className="hover:text-blue-500 font-normal"
      >
        Shop
      </Link>
      <span className="text-gray-400 text-bold">&gt;</span>
      <span className="text-black font-normal">Asgard Arts</span>
    </nav>
  );
};

export default CartBreadcrumb;