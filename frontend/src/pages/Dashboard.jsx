import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Support from '../components/Support';

function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [date, setDate] = useState(new Date()); // State for calendar date
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const guides = [
    { name: 'Priya Sharma', date: '04 Jan - 10 Jan 2024', image: assets.Profile1 },
    { name: 'Arjun Patel', date: '05 Feb - 10 Feb 2024', image: assets.Profile2 },
    { name: 'Sneha Reddy', date: '04 May - 08 May 2024', image: assets.Profile3 },
  ];

  const trips = [
    { title: 'Maharaja Palace', price: '₹750 / Person', discount: '20% OFF', image: assets.varkalaPackage1 },
    { title: 'Ponnumthuruthu', price: '₹750 / Person', discount: '15% OFF', image: assets.coorgPackage1 },
    { title: 'Tadiandamol Peak', price: '₹850 / Person', discount: '10% OFF', image: assets.kolhapurImage },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'support':
        return <Support />;
      default:
        return (
          <>
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
                {trips.map((trip, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-lg relative flex flex-col items-start">
                    <img src={trip.image} className="w-full h-32 rounded-lg object-cover" />
                    <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">
                      {trip.discount}
                    </span>
                    <h3 className="font-bold text-lg mt-2">{trip.title}</h3>
                    <p className="text-gray-500">{trip.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen w-screen max-w-full bg-[#f3f4f6]">
      {/* Sidebar */}
      <div className="col-span-2 rounded-lg min-h-full">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      </div>

      {/* Main Content */}
      <div className="col-span-8 rounded-lg min-h-fit pt-4 px-4">
        {/* Header with Search Bar and Profile */}
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

        {/* Render Section Content */}
        <div className="mt-4">{renderSection()}</div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-2 flex flex-col items-center px-4 pt-4">
        {/* Notification and Profile */}
        <div className="relative mb-8">
          <button onClick={toggleDropdown} className="flex items-center space-x-2">
            <Bell className="text-primary" />
            <img src={assets.profilePhoto} alt="Profile" className="w-12 h-12 rounded-xl" />
            <ChevronDown className="text-gray-500" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate('/editprofile')}
              >
                Update Profile
              </button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>

        {/* Calendar Section */}
        <div className="bg-white p-2 rounded-lg shadow-lg w-full mb-10">
          <h3 className="font-semibold text-lg mb-4">Calendar</h3>
          <Calendar onChange={setDate} value={date} className='font-outfit text-zinc-800' />
        </div>

        {/* Top Guides Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-full">
          <h3 className="font-semibold text-lg mb-4">Top Guides</h3>
          <div className="space-y-4">
            {guides.map((guide, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={guide.image} alt={guide.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-gray-700">{guide.name}</p>
                  <p className="text-sm text-gray-500">{guide.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
