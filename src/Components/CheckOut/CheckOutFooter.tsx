export default function Footer() {
    return (
      <footer className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Section */}
            <div>
              <p className="text-sm text-gray-700">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </p>
            </div>
  
            {/* Links Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                Help
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                Newsletter
              </h3>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t pt-4 text-center">
            <p className="text-sm text-gray-600">
              &copy; 2024 Tech Samina. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  