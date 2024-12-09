import Image from "next/image";

const ProductGrid = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa, 3",
      price: "Rs. 25,000.00",
      image: "/Trenton modular sofa_3.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/Granite dining table with dining chair 1.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/Outdoor bar table and stool 1.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/Plain console with teak mirror 1.png",
    },
    {
        id:5,
        name: "Grain coffee table ",
        price: "Rs 15,000.00",
        image: "/Grain coffee table 1.png",
        },
        {
            id: 6,
            name: "Kent coffe table",
            price: "Rs. 250,000.00",
            image: "/Kent coffee table 1.png",
            },
       
    {
      id: 7,
      name: "Round coffee table_Color 2",
      price: "Rs. 250,000.00",
      image: "/Round coffee table_color 2.png",
    },
    {
        id: 8,
        name: "Reclaimed teak coffee table  ",
        price: "Rs 25,200.00",
        image: "/Reclaimed teak coffee table 1.png",
        },
        {
            id: 9,
            name: "Reclaimed teak sideboard ",
            price: "Rs 20,000.00",
            image: "/Reclaimed teak Sideboard 1.png",
            },
      {
        id: 10,
        name: "Plain console_1 ",
        price: "Rs 258,200.00",
        image: "/Plain console_ 1.png",
        },
        {
            id: 11,
            name: "SJP_0825 ",
            price: "Rs 20,000.00",
            image: "/SJP_0825.png",
            },
            {
                id: 12,
                name: "Bella chair and table 1 ",
                price: "Rs 100,000.00",
                image: "/Bella chair and table 1.png",
                }, 
                {
                    id: 13 ,
                    name: "Granite square side table ",
                    price: "Rs 258,800.00",
                    image: "/Granite square side table1.png",
                    },
      
    {
      id: 14,
      name: "Asgaard sofa 1 ",
      price: "Rs. 25,000.00",
      image: "/Asgaard sofa 1.png",
    },
    {
      id: 15,
      name: "Maya sofa three seater",
      price: "Rs. 215,000.00",
      image: "/Maya sofa three seater 1.png",
    },
    {
      id: 16,
      name: "Outdoor sofa set",
      price: "Rs. 250,000.00",
      image: "/Outdoor sofa set 1.png",
    },
  ];

  return (
    <div className="bg-white py-12 px-6 lg:px-24">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
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
