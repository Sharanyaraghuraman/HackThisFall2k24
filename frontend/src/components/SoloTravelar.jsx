  import React from 'react';

  // Array of solo travelers data
  const soloTravelersData = [
    {
      id: 1,
      name: "Sharanya",
      destination: "Kolhapur",
      imageSrc: "https://img.freepik.com/premium-photo/tourist-woman-traveling-by-bike-beach_961875-282069.jpg",
      interests: ["Hiking", "Food", "Photography"],
    },
    {
      id: 2,
      name: "Rakesh",
      destination: "Kerala",
      imageSrc: "https://media.gettyimages.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=612x612&w=gi&k=20&c=uxpcG0KHRG_25qn-2xfovHtZX7eQVXEjHhedmao1RA8=",
      interests: ["Adventure", "Nature"],
    },
    {
      id: 3,
      name: "Arjun",
      imageSrc: "https://media.gettyimages.com/id/1812639215/photo/close-up-image-of-indian-man-wearing-red-life-jacket-reclining-in-green-pedalo-on-reservoir.jpg?s=612x612&w=gi&k=20&c=vfpF1B8qPhJbCli_ped5MQ-DYaGsrIDkuHwK-dMs1W4=", // Replace with your own image URL or Base64 string
      destination: "Kolhapur",
      interests: ["Sightseeing", "Photography"],
    },
    {
      id: 4,
      name: "Yashika",
      imageSrc: "https://www.treebo.com/blog/wp-content/uploads/2018/03/Parnashree-Devi.jpg", // Replace with your own image URL or Base64 string
      destination: "Varkala",
      interests: ["Nature", "Culture", "Nightlife"],
    },
  ];


  const FindSoloTravelers = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Find Solo Travelers</h2>
        
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {soloTravelersData.map((traveler) => (
            <div key={traveler.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={traveler.imageSrc}
                alt={traveler.name}
                className="w-full h-48 object-cover rounded-t-lg"
                onError={(e) => (e.target.src = 'fallback-image-url.jpg')}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{traveler.name}</h3>
                <p className="text-gray-600">Destination: {traveler.destination}</p>
                <p className="text-gray-600 mt-2">Interests:</p>
                <ul className="text-gray-600">
                  {traveler.interests.map((interest, index) => (
                    <li key={index} className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mr-2 mt-2">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default FindSoloTravelers;
