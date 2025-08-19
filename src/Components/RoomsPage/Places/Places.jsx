import React from "react";

const NearbyPlaces = () => {
  const places = [
    { name: "Solang Valley", imageUrl: "/new/solang.jpg"},
    { name: "Rohtang Pass", imageUrl: "/new/rohtang.jpg" },
    { name: "Naggar", imageUrl: "/new/naggar.jpg"},
    { name: "Old Manali", imageUrl: "/new/manali.jpg"},
    { name: "Hadimba Temple", imageUrl: "/new/h-1.jpeg", },
    { name: "Manu Temple", imageUrl: "/images/m-1.jpg",},
    { name: "Bhrigu Lake", imageUrl: "/new/d-4.jpg",},
    { name: "Parvati Valley", imageUrl: "/new/d-3.jpg", }
  ];

  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Nearby Places to <span className="text-red-800">Visit</span> in Manali</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {places.map((place) => (
          <div key={place.name} className="flex flex-col items-center">
            <img
              src={place.imageUrl}
              alt={place.name}
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{place.name}</h3>
            <p className="text-sm text-gray-500">{place.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
