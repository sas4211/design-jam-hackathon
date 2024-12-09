import Image from "next/image";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-yellow-100 text-left">
                <th className="p-4 text-sm font-semibold">Product</th>
                <th className="p-4 text-sm font-semibold">Price</th>
                <th className="p-4 text-sm font-semibold">Quantity</th>
                <th className="p-4 text-sm font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/Asgaard sofa 1.png" // Replace with your actual image path
                      alt="Asgaard Sofa"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    Asgaard sofa
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-800">Rs. 250,000.00</td>
                <td className="p-4">
                  <input title="cart"
                    type="number"
                    defaultValue={1}
                    className="w-12 border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </td>
                <td className="p-4 text-sm text-gray-800">Rs. 250,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="text-sm text-gray-700">Subtotal</span>
            <span className="text-sm font-medium text-gray-800">
              Rs. 250,000.00
            </span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-sm text-gray-700">Total</span>
            <span className="text-lg font-bold text-yellow-600">
              Rs. 250,000.00
            </span>
          </div>
          <button className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
