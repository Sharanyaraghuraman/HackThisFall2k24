import React from 'react';

const Support = () => {
  const supportOptions = [
    "Contact Us", "Customer Support", "Chat with us", "Hotel Bookings", "Report a Fraud",
    "Talk to Guide", "Payment Issue", "Transport", "Manage Bookings", "Become a guide",
    "Tour Plans", "Safety & Concerns"
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-6 p-4 bg-white shadow rounded-lg">
      {supportOptions.map((option) => (
        <button key={option} className="bg-green-500 text-white py-2 px-4 rounded-lg">
          {option}
        </button>
      ))}
    </div>
  );
};

export default Support;