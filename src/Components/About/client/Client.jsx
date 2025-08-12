import React from 'react';

const hotelPartners = [
  {
    src: "data:image/jpeg;base64,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", // Himachal Tourism Logo
    alt: "Himachal Tourism"
  },
  {
    src: "https://images.seeklogo.com/logo-png/33/1/makemytrip-logo-png_seeklogo-336111.png", // MakeMyTrip Logo
    alt: "MakeMyTrip"
  },
  {
    src: "https://images.seeklogo.com/logo-png/30/1/goibibo-logo-png_seeklogo-305530.png", // Goibibo Logo
    alt: "Goibibo"
  },
  {
    src: "https://images.seeklogo.com/logo-png/34/1/redbus-logo-png_seeklogo-347983.png", // RedBus Logo
    alt: "RedBus"
  },
  {
    src: "https://images.seeklogo.com/logo-png/30/1/agoda-logo-png_seeklogo-309548.png", // Agoda Logo
    alt: "Agoda"
  },
  {
    src: "https://images.seeklogo.com/logo-png/33/1/makemytrip-logo-png_seeklogo-336111.png", // Booking.com Logo
    alt: "Booking.com"
  }
];

export default function Clients() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="mb-3 flex justify-center items-center">
          <hr className="w-12 border-t-2 border-red-800 mr-4" />
          <span className="text-black uppercase tracking-widest font-medium">Trusted by Leading Hotels</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
          OUR HOTEL PARTNERS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are proud to collaborate with some of the finest hotels and booking platforms in the industry. Our partners trust us to enhance guest experiences and deliver exceptional hospitality solutions. Explore our network of prestigious hotel partners below.
        </p>
        <div className="flex flex-wrap justify-center mb-5 items-center gap-10">
          {hotelPartners.map((partner, idx) => (
            <img
              key={idx}
              src={partner.src}
              alt={partner.alt}
              className="h-20 object-contain   transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
