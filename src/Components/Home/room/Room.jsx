import React from 'react';
import "./index.css"

const rooms = [
  {
    title: 'Super Deluxe Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fHww',
    button: true,
    features: [
      '2 Person',
      'LED TV',
      'All Meals',
      'Free WiFi',
      'Travel Desk',
    ],
  },
  {
    title: 'Suite',
    image: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    button: true,
    features: [
      '2 Person',
      'LED TV',
      'All Meals',
      'Free WiFi',
      'Travel Desk',
      '24 Hrs Services',
    ],
  },
  {
    title: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1668260592478-a6513b0a690e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    button: false,
    description: "Dine at our in-house Restaurant, offering a variety of cuisines and a cozy ambiance.",
  },
];

export default function RoomsSuites() {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-medium tracking-widest text-gray-700">
            THE CASTLE RESORT MANALI
          </h2>
          <h1 className="text-6xl font-serif font-bold mt-2 text-gray-900">Rooms & <em className='text-red-800 italic font-serif'>Suites</em></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="flip-card h-[450px] rounded-lg overflow-hidden shadow-lg group relative">
              <div className="flip-card-inner w-full h-full">
                {/* FRONT */}
                <div
                  className="flip-card-front w-full h-full relative flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${room.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute bottom-6 left-0 w-full text-center z-10">
                    <span className="text-white text-3xl font-serif shadow-lg drop-shadow-lg">{room.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
                </div>
                {/* BACK */}
                <div className="flip-card-back w-full h-full flex flex-col justify-center items-center bg-[#212121] p-8">
                  <h3 className="text-white text-3xl font-serif mb-4">{room.title}</h3>
                  {room.features ? (
                    <ul className="text-gray-200 text-lg text-left list-disc list-inside space-y-1">
                      {room.features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-200 text-lg text-center">{room.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
