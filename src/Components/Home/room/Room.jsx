import React from 'react';
import "./index.css";

const rooms = [
  {
    title: 'Super Deluxe Room 1',
    image: '/images/a (4).JPG', // Ensure the image is in the public/images folder
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
    title: 'Super Deluxe Room 2',
    image: '/images/a (5).JPG', // Ensure the image is in the public/images folder
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
    title: 'Super Deluxe Room 3',
    image: 'https://images.unsplash.com/photo-1603052871303-1b65e290e6ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb20lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    button: true,
    features: [
      '2 Person',
      'LED TV',
      'All Meals',
      'Free WiFi',
      'Travel Desk',
    ],
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
                    height: '100%', // Ensure it takes full height
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
                  ) : null}
                  {room.button && (
                    <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg">
                      Book Now
                    </button>
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
