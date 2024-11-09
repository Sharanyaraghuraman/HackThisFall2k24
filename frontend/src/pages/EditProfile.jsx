import React, { useState } from 'react';
import { Pencil, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function EditProfile() {
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState('/path/to/default/photo.jpg');
  const [formData, setFormData] = useState({
    fullName: 'Smriti S',
    email: 'smriti@gmail.com',
    phone: '+91 9409675167',
    age: '30',
    gender: 'F',
    language: 'English, Hindi, Tamil',
    location: 'Chennai, Tamil Nadu, India',
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setProfilePhoto(photoURL);
    }
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#EDF0F7] min-h-screen py-10 relative">
      {/* Close (X) Icon */}
      <button
        onClick={handleClose}
        className="absolute top-10 right-5 text-red-600 hover:text-red-600"
        title="Close and go back to Dashboard"
      >
        <X size={24} />
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6 relative">
          <img
            src={assets.profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
          <label
            htmlFor="profilePhotoInput"
            className="absolute bottom-2 right-2 bg-gray-700 text-white p-2 rounded-full cursor-pointer"
            title="Change profile photo"
          >
            <Pencil size={18} />
          </label>
          <input
            type="file"
            id="profilePhotoInput"
            className="hidden"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>

        {/* Profile Information Form */}
        <div className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email with Edit Icon */}
          <div className="relative">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
           
            </span>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-gray-700 font-semibold">Age</label>
            <input
              type="text"
              value={formData.age}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-gray-700 font-semibold">Gender</label>
            <input
              type="text"
              value={formData.gender}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="text-gray-700 font-semibold">Language</label>
            <input
              type="text"
              value={formData.language}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div className="col-span-2">
            <label className="text-gray-700 font-semibold">District / State / Country</label>
            <input
              type="text"
              value={formData.location}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
