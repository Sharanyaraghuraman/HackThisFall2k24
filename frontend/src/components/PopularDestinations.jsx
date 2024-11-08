import React from 'react';
import { assets } from '../assets/assets';

function PopularDestinations() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Popular Destinations</h2>
        <div className="bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${assets.mapBackground})` }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {[
              { image: assets.coorgImage, title: 'Coorg', date: '20th Sept - 22nd Sept' },
              { image: assets.kolhapurImage, title: 'Kolhapur', date: '20th Sept - 22nd Sept' },
              { image: assets.varkalaImage, title: 'Varkala', date: '20th Sept - 22nd Sept' },
            ].map((destination, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
                <img src={destination.image} alt={destination.title} className="w-16 h-16 rounded-md" />
                <div>
                  <h3 className="font-semibold text-lg">{destination.title}</h3>
                  <p className="text-gray-500">{destination.date}</p>
                </div>
                <div className="ml-auto text-green-500 text-xl">&gt;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
