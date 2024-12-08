import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-yellow-200 flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-24 lg:py-24">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:max-w-md mx-auto">
        <h1 className="text-6xl lg:text-5xl font-bold  mb-6  items-center leading-tight">
          Rocket Single Seater
        </h1>
        <button className="text-lg font-semibold text-black underline hover:no-underline">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 lg:mt-0">
        <Image
          src="/Rocket single seater 1.png" // Replace with the correct image path
          alt="Rocket single seater"
          width={853} // Adjust width as necessary
          height={1000} // Adjust height as necessary
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
