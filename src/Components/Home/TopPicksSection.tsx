import Image from "next/image";

const TopPicksSection = () => {
  return (
    <section className="bg-[#faf4fa] py-12 px-6 lg:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Top Picks For <span className="text-[#FF7F50]">You</span></h2>
        <p className="text-gray-600 mt-2">
          Find a bright idea to suit your space with our great selection of superchairs, floor, and table lights.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Trenton modular sofa_3 1.png" // Replace with the actual image path
            alt="Tharken modular sofa"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="text-lg font-semibold mt-4">Tharken modular sofa</h3>
          <p className="text-gray-700 font-bold">Rs. 25,000.00</p>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Granite dining table with dining chair 1.png" // Replace with the actual image path
            alt="Granite dining table with dining chair"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="text-lg font-semibold mt-4">Granite dining table with dining chair</h3>
          <p className="text-gray-700 font-bold">Rs. 25,000.00</p>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Outdoor bar table and stool1.png" // Replace with the actual image path
            alt="Outdoor bar table and stool"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="text-lg font-semibold mt-4">Outdoor bar table and stool</h3>
          <p className="text-gray-700 font-bold">Rs. 25,000.00</p>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/Plain console with teak mirror 1.png" // Replace with the actual image path
            alt="Plank console with bench mirror"
            width={200}
            height={200}
            className="object-contain"
          />
          <h3 className="text-lg font-semibold mt-4">Plank console with bench mirror</h3>
          <p className="text-gray-700 font-bold">Rs. 25,000.00</p>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="text-[#007BFF] font-medium underline hover:no-underline">
          View More
        </button>
      </div>
    </section>
  );
};

export default TopPicksSection;
