import React, { useState } from 'react';
import { assets } from '../assets/assets';

function BestPackages() {
  const [selectedTab, setSelectedTab] = useState('Hot Deals');

  const tabs = ['Hot Deals', 'Backpack', 'Coorg', 'Kolhapur', 'Varkala', 'More'];
  const packages = [
    { image: assets.coorgPackage1, title: '3 Days, 2 Nights', price: '₹6000 / Person', location: 'Coorg', description: 'Explore Coorg in 2 days and 3 nights, with its coffee plantations, waterfalls, and scenic beauty.' },
    { image: assets.kolhapurPackage1, title: '3 Days, 2 Nights', price: '₹3000 / Person', location: 'Kolhapur', description: 'Explore Kolhapur in 2 days and 3 nights, with its temples, culture, and cuisine.' },
    { image: assets.varkalaPackage1, title: '3 Days, 2 Nights', price: '₹4000 / Person', location: 'Varkala', description: 'Experience Varkala in 2 days and 3 nights, with its beaches, cliffs, and spiritual vibe.' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Best Packages For You</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded-full font-semibold ${selectedTab === tab ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 w-full">
                <img src={pkg.image} alt={pkg.location} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{pkg.title}</h3>
                <p className="text-gray-700 font-semibold mb-1">{pkg.price}</p>
                <p className="text-gray-500 mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">{pkg.location}</p>
                  <button className="text-green-500 font-semibold">Know More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

export default BestPackages;
