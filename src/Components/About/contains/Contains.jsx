import React from "react";

// Replace this URL with your actual background image or local file import if needed
const bgImage = "/P/p-6.webp";

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            Our Key Statistics
          </h2>
          <p className="text-xl font-light mb-6">
            We take pride in delivering top-tier services, and these statistics reflect our commitment to excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white bg-opacity-40 rounded-xl py-8 px-6 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-orange-500 mb-6 hover:bg-orange-600 transition-all">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-12 h-12"
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <span className="text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </span>
              <div className="w-16 h-1 bg-orange-400 mb-3 mx-auto"></div>
              <span className="uppercase tracking-widest text-lg text-white font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
