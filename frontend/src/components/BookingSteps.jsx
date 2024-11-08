import React from 'react';
import { FaMapMarkedAlt, FaCreditCard, FaUserFriends } from 'react-icons/fa';
import { assets } from '../assets/assets';

function BookingSteps() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Book Your Next Trip in 3 Easy Steps</h2>
        <p className="text-center text-gray-600 mb-12">Easy and Fast</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Steps Section */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-green-500 text-white p-3 rounded-full">
                <FaMapMarkedAlt size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Choose Destination</h3>
                <p className="text-gray-600">Choose your ideal destination for a memorable escape, from beaches to cultural gems.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-orange-500 text-white p-3 rounded-full">
                <FaCreditCard size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Make Payment</h3>
                <p className="text-gray-600">Securely make your payment for a hassle-free and seamless booking experience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
                <FaUserFriends size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Meet Your Guide</h3>
                <p className="text-gray-600">Meet your expert local guide for a personalized, informative, and memorable journey.</p>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <img src={assets.coorgImage} alt="Trip to Coorg" className="w-full h-48 object-cover rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold">Trip To Coorg</h3>
              <p className="text-gray-500">14-29 June | by Reetu Jo</p>
            </div>
            <div className="flex space-x-4 text-gray-500">
              <span className="flex items-center space-x-1">
                <i className="fas fa-calendar-alt"></i> <span>14-29 June</span>
              </span>
              <span className="flex items-center space-x-1">
                <i className="fas fa-user"></i> <span>24 people going</span>
              </span>
            </div>
            <div className="bg-blue-50 text-blue-600 text-sm font-semibold py-1 px-2 rounded-lg inline-block">
              Ongoing • 40% completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
