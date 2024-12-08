import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-[#faf4fa] py-12 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Image Section */}
        <div className="flex justify-center">
          <Image
            src="/Asgaard sofa 1.png" // Replace with the actual image path
            alt="Sofa Set"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Product Info Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Augend</h2>
          <p className="text-lg text-gray-600 mb-6">BK 12,000</p>
          <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
