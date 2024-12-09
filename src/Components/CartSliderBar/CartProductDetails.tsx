"use client"
import { useState } from "react";
import Image from "next/image";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional-info", label: "Additional Information" },
    { id: "reviews", label: "Reviews [5]" },
  ];

  const images = [
    "/Cloud sofa three seater + ottoman_2 1.png", // Replace with actual image paths
    "/Cloud sofa three seater + ottoman_1 1.png", // Replace with actual image paths
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-base font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-center">
        {activeTab === "description" && (
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-gray-600 mb-6">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-sm text-gray-600">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage-styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio profile. The analogue knobs allow
              you to fine-tune the controls to your personal preferences.
            </p>
          </div>
        )}
        {activeTab === "additional-info" && (
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-gray-600">
              Dimensions: 120x60x40cm, Weight: 10kg
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-gray-600">Reviews coming soon!</p>
          </div>
        )}
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow"
          >
            <Image
              src={image}
              alt={`Sofa ${index + 1}`}
              width={720} // Adjust width
              height={480} // Adjust height
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
