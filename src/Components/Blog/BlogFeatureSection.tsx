export default function FeatureSection() {
    const features = [
      {
        title: "Free Delivery",
        description: "For all orders over $50, consectetur adipim scing elit.",
      },
      {
        title: "90 Days Return",
        description: "If goods have problems, consectetur adipim scing elit.",
      },
      {
        title: "Secure Payment",
        description: "100% secure payment, consectetur adipim scing elit.",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <div key={index} className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  