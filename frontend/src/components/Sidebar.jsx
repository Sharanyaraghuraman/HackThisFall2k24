import React from 'react';
import { useNavigate } from 'react-router-dom';
import { House, Wallet, Globe, Users, LogOut, Settings } from 'lucide-react';
import { assets } from '../assets/assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ setActiveSection, activeSection }) => {
  const navigate = useNavigate();

  // Handle logout with toast message
  const handleLogout = () => {
    toast.success('Logged out successfully!');
    setTimeout(() => {
      navigate('/');
    }, 2500); // Delay to allow the toast to show before navigation
  };

  return (
    <div className="fixed top-0 left-0 w-64 min-h-screen bg-white shadow-lg font-outfit">
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
      
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
            activeSection === 'guides' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('guides')}
        >
          <Globe />
          <p>Guides</p>
        </li>
        <li
          className={`flex items-center gap-4 p-4 cursor-pointer ${
            activeSection === 'solotravellar' ? 'text-green-500' : ''
          }`}
          onClick={() => setActiveSection('solotravellar')}
        >
          <Users />
          <p>Solo Traveler</p>
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
        <li
          className="flex items-center gap-4 p-4 cursor-pointer text-red-500"
          onClick={handleLogout}
        >
          <LogOut />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
