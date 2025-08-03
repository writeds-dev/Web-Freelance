// src/components/RoomGrid.jsx

import {
  Car,
  Wifi,
  Coffee,
  CupSoda,
  BedDouble,
  Soup,
} from "lucide-react";

const rooms = [
  {
    title: "Classic Balcony Room",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww", // update with your real image path
    desc: "Visitors to your city need to eat. In fact, some people visit new towns specifically.",
    price: "$600/Night",
  },
  {
    title: "Superior Double Room",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",
    desc: "Visitors to your city need to eat. In fact, some people visit new towns specifically.",
    price: "$400/Night",
  },
  {
    title: "Super Balcony Double Room",
    img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fHww",
    desc: "Visitors to your city need to eat. In fact, some people visit new towns specifically.",
    price: "$100/Night",
  },
];

// You can update or swap these icons as needed
const icons = [
  <Car key="car" size={24} />,
  <Wifi key="wifi" size={24} />,
  <Coffee key="coffee" size={24} />,
  <CupSoda key="soda" size={24} />,
  <BedDouble key="bed" size={24} />,
  <Soup key="soup" size={24} />,
];

const RoomDetails = () => (
  <div className="container mx-auto  max-w-6xl py-10 px-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {rooms.map((room, idx) => (
        <div key={room.title} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <img src={room.img} alt={room.title} className="h-60 w-full object-cover" />
          <div className="p-8 flex-1 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">{room.title}</h2>
            <p className="text-gray-600 text-center mb-5">{room.desc}</p>
            <div className="flex justify-center flex-wrap gap-6 mb-5 text-gray-700">
              {icons}
            </div>
          </div>
          <div className="border-t flex">
            <div className="flex-1 text-center py-5 font-semibold text-gray-800">{room.price}</div>
            <button className="flex-1 py-5 font-semibold text-blue-600 hover:bg-blue-50 transition">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RoomDetails;
