import React, { useState } from 'react';
import { User } from 'lucide-react';
import { assets } from '../assets/assets';
const Guides = () => {
  const [filter, setFilter] = useState(""); // Filter state to switch between guide types

  // Define guides data directly with travel-specific information
  const guides = {
    localGuides: [
      {
        name: "Priya Sharma",
        expertise: "Tour Guide",
        experience: 5,
        location: "Varkala, Kerala",
        image: assets.Profile1, // Image for local guide in Varkala
      },
      {
        name: "Arjun Patel",
        expertise: "Cultural Heritage",
        experience: 4,
        location: "Kolhapur, Maharashtra",
        image: assets.Profile2, // Image for local guide in Kolhapur
      },
      {
        name: "Sneha Reddy",
        expertise: "Nature & Wildlife",
        experience: 6,
        location: "Kerala, India",
        image: assets.Profile3, // Image for local guide in Kerala
      },
    ],
    internationalGuides: [
        {
          name: "Ananya Nair",
          expertise: "Mountain Tours",
          experience: 8,
          location: "Coorg",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbwKtkbBGpEIuSfnEie1_UtMVI5WKpN00Yw&s", // Link to international guide image
        },
        {
          name: "Vishal Reddy",
          expertise: "Beach & Coastal Tours",
          experience: 10,
          location: "Varkala",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVIhZr3p8cSWDOuEPSTFiXOqwg_xhzXYaAw&s", // Link to international guide image
        },
      ],
  };

  const filteredData = filter
    ? guides[filter]
    : [...guides.localGuides, ...guides.internationalGuides]; // Show both Local and International guides when no filter is selected

  const handleBookNow = (guide) => {
    // Replace with your booking logic (e.g., navigate to booking page or open a modal)
    alert(`Booking for ${guide.name}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-primary">Find a Guide</h1>
        <div className="space-x-4">
          <button
            className={`py-2 px-4 rounded-lg ${!filter ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setFilter("")}
          >
            All
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${filter === "localGuides" ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setFilter("localGuides")}
          >
            Local Guides
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${filter === "internationalGuides" ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setFilter("internationalGuides")}
          >
            International Guides
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((guide, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start border border-gray-200 hover:shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">{guide.name}</h2>
                <p className="text-gray-600">{guide.expertise}</p>
                <p className="text-sm text-gray-500">Experience: {guide.experience} years</p>
                <p className="text-sm text-gray-500 font-medium">Location: {guide.location}</p>
              </div>
            </div>
            <button
              onClick={() => handleBookNow(guide)}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
