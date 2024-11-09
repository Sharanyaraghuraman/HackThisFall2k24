import React from 'react';
import { useNavigate } from 'react-router-dom';
import { House, Wallet, Globe, MessageSquareMore, Users, LogOut, Settings } from 'lucide-react';
import { assets } from '../assets/assets'; // Make sure assets are properly imported

const Sidebar = ({ setActiveSection, activeSection }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-64 min-h-screen bg-white shadow-lg font-outfit">
      <div className="flex justify-center py-5 border-b">
        <img
          src={assets.Logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>

      <ul className="mt-5 space-y-1 text-gray-700">
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'home' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('home')}
        >
          <House />
          <p>Home</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'booking' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('booking')}
        >
          <Wallet />
          <p>Booking</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'fellowtravellar' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('explore')}
        >
          <Globe />
          <p>Explore</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'message' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('message')}
        >
          <MessageSquareMore />
          <p>Message</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'support' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('support')}
        >
          <Users />
          <p>Support</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'settings' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('settings')}
        >
          <Settings />
          <p>Settings</p>
        </li>
        <li className="flex items-center gap-4 p-4 cursor-pointer text-red-500" onClick={() => navigate('/')}>
          <LogOut />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
