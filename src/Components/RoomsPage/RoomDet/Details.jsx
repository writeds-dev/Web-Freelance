import React from 'react';
import {
  Car,
  Wifi,
  Coffee,
  CupSoda,
  BedDouble,
  Soup,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    title: "Superior Double Room",
    img: "/images/a (7).JPG",
    desc: "Visitors to your city need to eat. In fact, some people visit new towns specifically.",
    icons: [<Car key="car" size={24} />, <Wifi key="wifi" size={24} />], // Customize icons for this room
  },
  {
    title: "Super Deluxe Room 1",
    img: "/images/a (15).JPG",
    desc: "Experience the luxurious and spacious Super Deluxe Room for ultimate comfort.",
    icons: [<Coffee key="coffee" size={24} />, <BedDouble key="bed" size={24} />], // Customize icons for this room
  },
  {
    title: "Super Deluxe Room 2",
    img: "/images/a (8).JPG",
    desc: "Enjoy a larger space and premium amenities for a memorable stay.",
    icons: [<CupSoda key="soda" size={24} />, <Soup key="soup" size={24} />], // Customize icons for this room
  },
];

const RoomDetails = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // Handle the submit action (redirect to "/book")
  const handleSubmit = () => {
    navigate("/book");
  };

  return (
    <div className="container mx-auto max-w-6xl py-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, idx) => (
          <div key={room.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={room.img} alt={room.title} className="h-60 w-full object-cover" />
            <div className="p-8 flex-1 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{room.title}</h2>
              <p className="text-gray-600 text-center mb-5">{room.desc}</p>
              <div className="flex justify-center flex-wrap gap-6 mb-5 text-gray-700">
                {room.icons} {/* Render only the relevant icons for each room */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Send Enquire Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit} 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Enquire
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
