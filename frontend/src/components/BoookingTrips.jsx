import React from 'react';

// Array of travel packages
const travelPackages = [
    {
      id: 1,
      city: "Varkala",
      imageSrc: "https://t3.ftcdn.net/jpg/09/87/10/30/240_F_987103026_wODhqYPOCC5Ge2ENvWgAvdobu6aRxcmE.jpg", // Replace with an actual image URL or local image
      description: " A coastal town in Kerala known for its stunning cliffs, pristine beaches, and vibrant spiritual atmosphere.",
      price: " ₹1200",
    },
    {
      id: 2,
      city: "Kolhapur",
      imageSrc: "https://t4.ftcdn.net/jpg/09/84/08/61/240_F_984086110_hghbqtEWaVuJeWhbmQKbAfbbqMwhHzMe.jpg", // Replace with an actual image URL or local image
      description: "A historic city in Maharashtra famous for its rich heritage, majestic temples, and traditional Kolhapuri chappals                      .",
      price: " ₹1500",
    },
    {
      id: 3,
      city: "Coorg",
      imageSrc: "https://media.istockphoto.com/id/2167006720/photo/a-dramatic-view-of-a-beautifully-landscaped-tea-plantation-in-the-western-ghats-of-coorg-hill.jpg?s=612x612&w=0&k=20&c=9LJNjptPqipbBiI3lVUCcQ-9vAmoSrJjM-QT-6Yo04U=", // Replace with an actual image URL or local image
      description: "A scenic hill station in Karnataka, renowned for its lush coffee plantations, misty hills, and serene natural beauty.",
      price: " ₹1300",
    },
  ];
  
  

const BookingTrips = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Available Travel Packages</h2>
      
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {travelPackages.map((packageItem) => (
          <div key={packageItem.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={packageItem.imageSrc}
              alt={packageItem.city}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{packageItem.city}</h3>
              <p className="text-gray-600 mt-2">{packageItem.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-4">Price: {packageItem.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingTrips;
