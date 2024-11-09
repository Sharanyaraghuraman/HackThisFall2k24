// LoginPage.jsx
import React from 'react';
import { assets } from '../assets/assets';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left section - Login form */}
      <div className="flex flex-col justify-center w-full max-w-md px-8 py-10 bg-white rounded-l-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
            />
            <label className="text-gray-700">Forgot password?</label>
          </div>
          <button className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Login</button>
          <button className="w-full py-2 text-white bg-green-400 rounded-md hover:bg-green-500">Sign Up</button>
        </form>
      </div>
      
      {/* Right section - Background image */}
      <div
        className="hidden md:flex w-full bg-cover rounded-r-lg"
        style={{
          backgroundImage: "url('https://s3.india.com/wp-content/uploads/2024/03/Feature-Image_-Coorg-Kodagu.jpg##image/jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};

export default LoginPage;