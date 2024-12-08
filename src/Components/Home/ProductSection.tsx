import Image from "next/image";

const ProductSection = () => {
  return (
    <div className="max-w-6xl mx-auto bg-[#faf4fa] p-6 lg:p-12 border border-blue-500 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center bg-rose-100 p-4 rounded-md shadow-md h-full">
          <Image
            src="/Granite square side table1.png" // Replace with actual image path
            alt="Side table"
            width={400}
            height={400}
            className="object-contain items-stretch"
          />
          <h2 className="text-xl font-bold mt-4">Side table</h2>
          <button className="text-sm font-medium text-black underline mt-2 hover:no-underline">
            View More
          </button>
        </div>

        {/* Product Card 2 */}
        
        <div className="flex flex-col items-center bg-rose-100 p-4 rounded-md shadow-md h-full">
          <div className="relative">
            <Image
            src="/Mask group1.png" // Replace with actual image path
            alt="Side table"
            width={500}
            height={500}
            className="object-contain p-20"
          />
          </div>
          <h2 className="text-xl font-bold mt-4 justify-center">Side table</h2>
          <button className="text-sm font-medium text-black underline mt-2 hover:no-underline">
            View More
          </button>
          </div>
        </div>
      </div>
    
    
  );
};

export default ProductSection;
