import React from 'react';
import { assets } from '../assets/assets';

function ServicesSection() {
  return (
    <section className="bg-gray-100 py-16">
      {/* Our Services */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={assets.PlacesIcon} alt="Places to Visit" className="w-12 h-12 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold text-gray-700">Places To Visit</h3>
            <p className="text-gray-600 mt-2">
              Discover new local spots and hidden gems that are easily accessible.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={assets.RestaurantsIcon} alt="Restaurants" className="w-12 h-12 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold text-gray-700">Restaurants</h3>
            <p className="text-gray-600 mt-2">
              Recommendations for dining spots and hidden culinary gems.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={assets.GuidesIcon} alt="Local Guides" className="w-12 h-12 mx-auto mb-4"/>
            <h3 className="text-xl font-semibold text-gray-700">Local Guides</h3>
            <p className="text-gray-600 mt-2">
              Connect with local guides to unlock authentic experiences and tips.
            </p>
          </div>
        </div>
      </div>

      {/* Best Service Section */}
      <div className="container mx-auto px-4 text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-800">
          We always try to give you the best service
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We always try to make our customer Happy. We provide all kinds of facilities. Your Satisfaction is our main priority.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <img src={assets.ExperienceIcon} alt="Experience" className="w-12 h-12 mb-2"/>
            <h4 className="text-xl font-bold text-gray-800">15+</h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <img src={assets.TravelersIcon} alt="Travelers" className="w-12 h-12 mb-2"/>
            <h4 className="text-xl font-bold text-gray-800">15k+</h4>
            <p className="text-gray-600">Happy Travelers</p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <img src={assets.PlacesVisitedIcon} alt="Places Visited" className="w-12 h-12 mb-2"/>
            <h4 className="text-xl font-bold text-gray-800">650+</h4>
            <p className="text-gray-600">Places Visited</p>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <img src={assets.TravelHistoryIcon} alt="Travel History" className="w-12 h-12 mb-2"/>
            <h4 className="text-xl font-bold text-gray-800">2k+</h4>
            <p className="text-gray-600">Travel History</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
