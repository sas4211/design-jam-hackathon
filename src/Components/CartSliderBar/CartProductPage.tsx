import Image from "next/image";

// pages/product/[id].tsx
export default function ProductPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Thumbnails */}
          <div className="flex md:flex-col md:space-y-2 space-x-2 md:space-x-0">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/images/sofa-${index + 1}.png`} // Replace with actual thumbnails
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover"
                  width={64} // Correct width in pixels
                  height={64} // Correct height in pixels
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden ml-4 md:ml-0 md:mt-0">
            <Image
              src="/Asgaard sofa 1.png" // Replace with the actual image path
              alt="Asgaard Sofa"
              className="object-cover"
              width={500} // Correct width in pixels
              height={500} // Correct height in pixels
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Product Name & Price */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Asgaard Sofa</h1>
          <p className="text-lg text-gray-700 mb-4">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-600">(12 Customer Reviews)</p>
          </div>

          {/* Product Description */}
          <p className="text-sm text-gray-600 mb-4">
            Taking the sofa as one of the loudest speakers in its class, this
            piece is a compact, sharp medium with a well-balanced sound profile.
          </p>

          {/* Size & Color Options */}
          <div className="mb-4">
            {/* Size */}
            <div className="mb-2">
              <label className="text-sm text-gray-600">Size:</label>
              <select
                title="variation"
                className="ml-2 border rounded-md px-3 py-1"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>

            {/* Colors */}
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600 mr-4">Color:</span>
              {["blue", "black", "white", "yellow"].map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer mr-2"
                  style={{ backgroundColor: color }} // Set the background color dynamically
                  >
               </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
            Add To Cart
          </button>

          {/* Additional Info */}
          <div className="mt-6">
            <p className="text-sm text-gray-600">
              <strong>SKU:</strong> 5801
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> Sofa
            </p>
            <p className="text-sm text-gray-600">
              <strong>Tags:</strong> Sofa, Chair, Home, Shop
            </p>
          </div>

          {/* Share Icons */}
          <div className="flex space-x-3 mt-4">
            <button
              title="facebook"
              className="p-2 bg-gray-200 rounded-full"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </button>
            <button
              title="linkedin"
              className="p-2 bg-gray-200 rounded-full"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </button>
            <button title="X" className="p-2 bg-gray-200 rounded-full">
              <Image src="/twitter.png" alt="Twitter" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
