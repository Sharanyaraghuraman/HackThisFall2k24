import React from 'react';

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Mera Guide</h1>
          </div>
          <ul className="flex space-x-8">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/guides" className="hover:text-gray-300">Guides</a></li>
            <li>
              <a 
                href="/signup" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
