import Image from "next/image";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const BlogSection = () => {
  return (
    <section className="bg-[#faf4fa] py-12 px-6 lg:px-24">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Blogs</h2>
        <p className="text-gray-600 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <Image
            src="/Rectangle 13.jpg" // Replace with the actual image path
            alt="Blog 1"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
            <p className="text-blue-500 font-medium mt-2 cursor-pointer hover:underline">
              Read More
            </p>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <FaClock className="mr-2" /> 5 min
              <FaCalendarAlt className="ml-4 mr-2" /> 12<sup>th</sup> Oct 2022
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <Image
            src="/Rectangle 14.jpg" // Replace with the actual image path
            alt="Blog 2"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
            <p className="text-blue-500 font-medium mt-2 cursor-pointer hover:underline">
              Read More
            </p>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <FaClock className="mr-2" /> 5 min
              <FaCalendarAlt className="ml-4 mr-2" /> 12<sup>th</sup> Oct 2022
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <Image
            src="/Rectangle 15.jpg" // Replace with the actual image path
            alt="Blog 3"
            width={400}
            height={250}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
            <p className="text-blue-500 font-medium mt-2 cursor-pointer hover:underline">
              Read More
            </p>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <FaClock className="mr-2" /> 5 min
              <FaCalendarAlt className="ml-4 mr-2" /> 12<sup>th</sup> Oct 2022
            </div>
          </div>
        </div>
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-8">
        <button className="text-blue-500 font-medium underline hover:no-underline">
          View All Post
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
