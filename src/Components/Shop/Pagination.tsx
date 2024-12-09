// components/Pagination.js
export default function Pagination() {
    return (
      <div className="flex justify-center items-center space-x-4 py-4 bg-white">
        {/* Page Number 1 */}
        <button
          className="px-4 py-2 bg-yellow-200 text-black font-medium rounded shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-current="page"
        >
          1
        </button>
  
        {/* Other Pages */}
        <button className="px-4 py-2 bg-yellow-100 text-black font-medium rounded shadow hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          2
        </button>
  
        <button className="px-4 py-2 bg-yellow-100 text-black font-medium rounded shadow hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          3
        </button>
  
        {/* Next Button */}
        <button className="px-6 py-2 bg-yellow-100 text-black font-medium rounded shadow hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Next
        </button>
      </div>
    );
  }
  