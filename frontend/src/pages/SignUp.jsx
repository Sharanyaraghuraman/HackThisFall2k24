import React from 'react';
import { assets } from '../assets/assets';

export default function SignUpPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white p-10">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">Create your account.</h2>
          <p className="text-center text-gray-600 mb-6">
            Already have an account? <a href="#" className="text-green-600 font-medium">Sign In</a>
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="sr-only">Full name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Full name *"
                className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email address *"
                className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password *"
                className="w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600">
                I agree to the terms and condition
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            
          </div>
          <div className="flex justify-center space-x-4">
            
          </div>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${assets.SignupBackground})` }}>
      </div>
    </div>
  );
}