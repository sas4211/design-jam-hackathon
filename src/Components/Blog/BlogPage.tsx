import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Rectangle 68.png" // Replace with your actual image path
              alt="Millennial Design"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span>Author</span>
                <span>30 Dec 2022</span>
                <span>Posted</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">
                Going all-in with millennial design
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est id leo luctus...
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Rectangle 69.png" // Replace with your actual image path
              alt="New Ways of Decorating"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span>Author</span>
                <span>30 Dec 2022</span>
                <span>Posted</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">
                Exploring new ways of decorating
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est id leo luctus...
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
              src="/Rectangle 70.png" // Replace with your actual image path
              alt="Handmade Pieces"
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                <span>Author</span>
                <span>30 Dec 2022</span>
                <span>Posted</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">
                Handmade pieces that took time to make
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                est id leo luctus...
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Crafting (2)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Design (8)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Handmade (4)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interior (7)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vintage (5)
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/recent1.png" // Replace with your actual image path
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>Going all-in with millennial design</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/recent2.png" // Replace with your actual image path
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>Exploring new ways of decorating</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/recent3.png" // Replace with your actual image path
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>Handmade pieces that took time to make</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/recent4.png" // Replace with your actual image path
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>Modern home in Milan</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/recent5.png" // Replace with your actual image path
                      alt="Recent Post"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span>Colorful office redesign</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}
