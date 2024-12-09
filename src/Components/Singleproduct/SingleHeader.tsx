import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-yellow-200">
      <nav className="fixed top-0 left-0 w-full flex items-center px-6 lg:px-24 py-4 bg-yellow-200 shadow-md z-50">
        {/* Centered Navigation Links */}
        <ul className="flex-1 flex justify-center space-x-8 text-lg font-semibold text-black">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Shop</li>
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right-Aligned Icons */}
        <div className="flex space-x-6 text-lg text-black">
          <FaUser className="hover:text-gray-600 cursor-pointer" />
          <FaSearch className="hover:text-gray-600 cursor-pointer" />
          <FaHeart className="hover:text-gray-600 cursor-pointer" />
          <FaShoppingCart className="hover:text-gray-600 cursor-pointer" />
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
