import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
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
          <FaShoppingCart className="hover:text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
