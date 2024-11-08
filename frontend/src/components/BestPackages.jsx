import React, { useState } from 'react';
import { assets } from '../assets/assets';

function BestPackages() {
  const [selectedTab, setSelectedTab] = useState('Hot Deals');

  const tabs = ['Hot Deals', 'Backpack', 'Coorg', 'Kolhapur', 'Varkala', 'More'];
  const packages = [
    { image: assets.coorgPackage1, title: '3 Days, 2 Nights', price: '₹6000 / Person', location: 'Coorg', distance: '6km' },
    { image: assets.kolhapurPackage1, title: '3 Days, 2 Nights', price: '₹8000 / Person', location: 'Kolhapur', distance: '6km' },
    { image: assets.varkalaPackage1, title: '3 Days, 2 Nights', price: '₹4000 / Person', location: 'Varkala', distance: '6km' },
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
              className={`py-2 px-4 rounded-full font-semibold ${selectedTab === tab ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
              <img src={pkg.image} alt={pkg.location} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{pkg.title}</h3>
                <p className="text-gray-500 mb-2">{pkg.price}</p>
                <p className="text-gray-500 mb-4">{pkg.location} • {pkg.distance}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestPackages;
