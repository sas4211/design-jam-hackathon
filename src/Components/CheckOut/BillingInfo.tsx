export default function BillingDetails() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Billing Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Form */}
          <div>
            <form className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
  
              {/* Company Name */}
              <div>
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your company name"
                />
              </div>
  
              {/* Country/Region */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country / Region
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                >
                  <option>United States</option>
                  <option>Sri Lanka</option>
                  <option>India</option>
                </select>
              </div>
  
              {/* Street Address */}
              <div>
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street-address"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your street address"
                />
              </div>
  
              {/* Town/City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your city"
                />
              </div>
  
              {/* Province */}
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <select
                  id="province"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                >
                  <option>Western Province</option>
                  <option>Central Province</option>
                </select>
              </div>
  
              {/* Zip Code */}
              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your ZIP code"
                />
              </div>
  
              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
  
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
  
              {/* Additional Information */}
              <div>
                <label
                  htmlFor="additional-info"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <textarea
                  id="additional-info"
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Additional details or instructions"
                ></textarea>
              </div>
            </form>
          </div>
  
          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>Asgaard Sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mb-4 font-bold">
              <div className="flex justify-between">
                <span>Total</span>
                <span>Rs. 250,000.00</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy
                </a>
                .
              </p>
            </div>
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
  