const FooterSection = () => {
    return (
      <footer className="bg-white py-12 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">123 Street, City, Country</p>
            <p className="text-gray-600">Email: info@example.com</p>
            <p className="text-gray-600">Phone: +123 456 7890</p>
          </div>
  
          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">Home</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">About</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Services</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Section 3: Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">Careers</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Privacy Policy</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Terms of Service</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Support</li>
            </ul>
          </div>
  
          {/* Section 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to stay updated.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-black"
              />
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-gray-500">
          <p>&copy; 2024 Samina Company. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  