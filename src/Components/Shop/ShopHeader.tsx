import Image from "next/image";

const ShopHeader = () => {
  return (
    <div className="relative w-full h-screen md:h-[400px] bg-cover bg-center">
      {/* Overlay */}
      <div
  className="absolute inset-0 bg-white bg-opacity-1"
></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full"
      style={{
        backgroundImage: "url('/Rectangle1.png')", // Replace with your actual image path
        backgroundSize: "cover", // Ensures the image covers the container without distortion
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center", // Centers the focus point of the image
      }}
      >
        {/* Icon */}
        <div className="mb-4">
          <Image
            src="/Meubel House_Logos-05.png" // Replace with the actual icon path
            alt="Shop Icon"
            width={50} // Icon width
            height={50} // Icon height
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-black">Shop</h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mt-2">Home / Shop</p>
      </div>
    </div>
  );
};

export default ShopHeader;
