import React from "react";

// Replace this URL with your actual background image or local file import if needed
const bgImage =
  "/P/p-6.webp";

const stats = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/69/69524.png", 
    value: "264",
    label: "Rooms",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png", 
    value: "576",
    label: "Staffs",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png", 
    value: "487",
    label: "Restaurant & Bars",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    value: "320",
    label: "Awards",
  },
];

export default function HotelStats() {
  return (
    <section
      className="w-full py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-10 h-10 mb-4"
                style={{ filter: "invert(1)" }}
              />
              <span className="text-3xl font-extrabold mb-2">{stat.value}</span>
              <div className="w-12 h-1 bg-orange-400 mb-2"></div>
              <span className="uppercase tracking-widest font-semibold text-lg">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
