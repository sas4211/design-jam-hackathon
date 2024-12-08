const InstagramSection = () => {
    return (
      <section className="bg-cover bg-center bg-no-repeat py-12 px-6 lg:px-24" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
        {/* Overlay */}
        <div className="bg-white bg-opacity-70 py-12 rounded-md text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-black">Our Instagram</h2>
          <p className="text-gray-600 mt-4">Follow our store on Instagram</p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full shadow-lg hover:bg-gray-800">
            Follow Us
          </button>
        </div>
      </section>
    );
  };
  
  export default InstagramSection;
  