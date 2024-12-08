import Image from "next/image";

const ProductGrid = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa, 3",
      price: "Rs. 25,000.00",
      image: "/path-to-image1.jpg",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/path-to-image2.jpg",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/path-to-image3.jpg",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/path-to-image4.jpg",
    },
    {
      id: 5,
      name: "Crown coffee table",
      price: "Rs. 250,000.00",
      image: "/path-to-image5.jpg",
    },
    {
      id: 6,
      name: "Nova coffee table",
      price: "Rs. 225,000.00",
      image: "/path-to-image6.jpg",
    },
    {
      id: 7,
      name: "Storage bench oak coffee",
      price: "Rs. 215,000.00",
      image: "/path-to-image7.jpg",
    },
    {
      id: 8,
      name: "Petra console",
      price: "Rs. 250,000.00",
      image: "/path-to-image8.jpg",
    },
    {
      id: 9,
      name: "Bench with teakwood",
      price: "Rs. 20,000.00",
      image: "/path-to-image9.jpg",
    },
    {
      id: 10,
      name: "Mogogo modular sofa",
      price: "Rs. 118,000.00",
      image: "/path-to-image10.jpg",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 lg:px-24">
      <h1 className="text-3xl font-bold text-center mb-8">Product Grid</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center bg-[#faf4fa] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain rounded-lg"
            />
            {/* Product Name */}
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            {/* Product Price */}
            <p className="text-gray-700 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
