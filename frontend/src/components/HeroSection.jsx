import React from 'react';
import Navbar from './Navbar';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage:  `url(${assets.HeroImage})` }}
      >
      <Navbar />
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Your Imagination Is Your Only Limit
          </h1>
          <p className="text-lg md:text-xl text-white mt-4 max-w-md mx-auto">
            We always try to make our customer Happy. We provide all kinds of facilities. Your satisfaction is our main priority.
          </p>
          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded" onClick={() => navigate('/login')}>
            Discover More
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
