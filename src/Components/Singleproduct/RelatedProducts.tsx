import Image from "next/image";

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: 25000,
      image: "/Trenton modular sofa_3.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: 25000,
      image: "/Granite dining table with dining chair 1.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: 25000,
      image: "/Outdoor bar table and stool1.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: 25000,
      image: "/Plain console with teak mirror 1.png", // Replace with actual image path
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 text-center"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              {product.name}
            </h3>
            <p className="text-lg font-semibold text-black mt-2">
              Rs. {product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="text-lg font-medium text-black underline">
          View More
        </button>
      </div>
    </div>
  );
}
