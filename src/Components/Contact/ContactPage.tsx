export default function ContactPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Get In Touch With Us
        </h1>
        <p className="text-sm text-gray-600 text-center mb-12">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-xl">📍</span>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-sm text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl">📞</span>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-sm text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-xl">⏰</span>
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-sm text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-sm text-gray-600">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="bg-white shadow rounded-lg p-6">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="This is optional"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring focus:ring-gray-200 focus:outline-none"
                  placeholder="Hi! I'd like to ask about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  