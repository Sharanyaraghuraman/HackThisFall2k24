import React from 'react';
import { assets } from '../assets/assets';

function PopularDestinations() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map Background */}
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${assets.mapBackground})` }}>
            <div className="relative w-full h-full">
              {/* Optional: Add any overlays or markers on the map here */}
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full w-4 h-4"></span>
            </div>
          </div>

          {/* Destination Cards */}
          <div className="space-y-6">
            {[
              { image: assets.coorgImage, title: 'Coorg', spots: '25+ Spots', duration: '2D & 3N' },
              { image: assets.kolhapurImage, title: 'Kolhapur', spots: '20+ Spots', duration: '3D & 3N' },
              { image: assets.varkalaImage, title: 'Varkala', spots: '20+ Spots', duration: '3D & 2N' },
            ].map((destination, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <img src={destination.image} alt={destination.title} className="w-24 h-24 rounded-md object-cover mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-xl">{destination.title}</h3>
                  <p className="text-gray-500">{destination.spots}</p>
                  <p className="text-gray-500">{destination.duration}</p>
                </div>
                <div className="text-gray-400 text-2xl">&gt;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
