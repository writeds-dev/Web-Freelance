import React from 'react';

const hotelPartners = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    alt: "Grand Palace Hotel"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/944/944535.png",
    alt: "Luxury Stay Resort"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/3171/3171003.png",
    alt: "Urban Suites"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/857/857681.png",
    alt: "Coastal Inn"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    alt: "Sunset Retreat"
  }
];

export default function Clients() {
  return (
    <section className=" bg-white py-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="mb-3 flex justify-center items-center">
          <hr className="w-12 border-t-2 border-red-800 mr-4" />
          <span className="text-black uppercase tracking-widest font-medium">Trusted by Leading Hotels</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">
          OUR HOTEL PARTNERS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are proud to collaborate with some of the finest hotels in the industry. Our partners trust us to enhance guest experiences and deliver exceptional hospitality solutions. Explore our network of prestigious hotel partners below.
        </p>
        <div className="flex flex-wrap justify-center mb-5 items-center gap-10">
          {hotelPartners.map((partner, idx) => (
            <img
              key={idx}
              src={partner.src}
              alt={partner.alt}
              className="h-20 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
