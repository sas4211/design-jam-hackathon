// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Address</h4>
            <p className="mt-2 text-sm text-gray-600">
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </p>
          </div>
  
          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Help</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Newsletter Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Want your first order shipped for <strong>FREE?</strong>
          </p>
        </div>
      </footer>
    );
  }
  