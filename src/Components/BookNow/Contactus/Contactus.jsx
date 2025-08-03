import React from "react";

const HotelBookNowCTA = () => {
  return (
    <section
      className="relative w-full h-[220px] md:h-[260px] flex items-center"
      style={{
        backgroundImage: "url('/P/p-5.webp')", // <-- Replace with your hotel image path or public URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center h-full px-8">
        {/* Left: Main text */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Ready for Your Perfect Stay?
          </h2>
          <p className="text-white text-2xl font-bold">
            Book direct and get exclusive benefits
          </p>
        </div>

        {/* Right: Contact info & Button */}
        <div className="flex flex-col items-center md:items-end">
          <div className="text-white text-2xl md:text-2xl font-extrabold mb-1 text-center md:text-right">
            +977-444-666-888
          </div>
          <div className="text-white text-2xl md:text-2xl font-extrabold mb-4 text-center md:text-right">
            info@yourhotel.com
          </div>
          <a
            href="mailto:info@yourhotel.com"
            className="bg-red-800 hover:bg-red-600 text-white text-xl font-bold rounded-md px-12 py-3 shadow transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HotelBookNowCTA;
