// components/Features.js
export default function Features() {
    return (
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-900">Free Delivery</h3>
            <p className="mt-2 text-sm text-gray-600">
              For all orders over $50, delivered fast to your doorstep.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-900">90 Days Return</h3>
            <p className="mt-2 text-sm text-gray-600">
              If goods have problems, easily return within 90 days.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
            <p className="mt-2 text-sm text-gray-600">
              100% secure payment for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    );
  }
  