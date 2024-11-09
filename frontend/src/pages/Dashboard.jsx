import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Search, Bell } from 'lucide-react';
import { assets } from '../assets/assets';

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="grid grid-cols-12 min-h-screen w-screen max-w-full bg-[#EDF0F7]">

      {/* Sidebar */}
      <div className="col-span-2 rounded-lg min-h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-8 rounded-lg min-h-fit pt-4 px-4">
        {/* Navbar Center */}
        <div className="flex justify-between items-center gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-zinc-900">Welcome, John Doe</h1>
            <p className="text-zinc-600">Welcome back and explore new trips</p>
          </div>
          <div className="relative mx-auto w-96">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full border border-gray-300 rounded-lg pl-10 focus:outline-none focus:border-[#023074a0]"
            />
            <Search className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Upcoming Trips */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming trips</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
            <img src={assets.coorgImage} alt="Coorg" className="w-32 h-24 rounded-md" />
            <div className="ml-4">
              <h3 className="font-bold text-lg">Abbey Falls Coorg Tour</h3>
              <p className="text-gray-500">23 Mar - 28 Mar • Coorg</p>
              <p className="text-green-500">From Bangalore to Coorg</p>
            </div>
            <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-lg">View details</button>
          </div>
        </div>

        {/* Trips Exclusively for You */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Trips exclusively for you</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Example card */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-lg relative">
                <img src={assets.varkalaPackage1} alt="Trip" className="w-full h-32 rounded-md object-cover" />
                <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">20% OFF</span>
                <h3 className="font-bold text-lg mt-2">Maharaja Palace</h3>
                <p className="text-gray-500">₹750 / Person</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-2 flex flex-col items-center px-4 pt-4">
        {/* Notification and Profile */}
        <div className="relative mb-8">
          <button onClick={toggleDropdown} className="flex items-center space-x-2">
            <Bell className="text-secondary" />
            <img src={assets.profilePhoto} alt="Profile" className="w-12 h-12 rounded-xl" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Update Profile</button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-white p-5 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-semibold mb-2">Calendar</h2>
          <div className="grid grid-cols-6 gap-1 text-center">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i} className={`py-2 px-2.2 rounded ${i === 23 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                {i + 1}
              </span>
            ))}
          </div>
        </div>

        {/* Top Guides */}
        <div className="bg-white p-4 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-lg font-semibold mb-4">Previous guides</h2>
          {['Priya Sharma', 'Arjun Patel', 'Sneha Reddy'].map((guide, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={assets.Profile1} alt={guide} className="w-8 h-8 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium">{guide}</p>
                  <p className="text-xs text-gray-500">04 Jan - 10 Jan 2024</p>
                </div>
              </div>
              <button className="text-green-500 font-semibold">Rebook</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
