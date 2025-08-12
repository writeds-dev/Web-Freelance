import React from 'react';

const services = [
  {
    title: "Dining",
    subtitle: "Restaurant",
    description:
      "The dining hall with its majestic setting lends enchantment to a cozy meal. Its sun decks are an ideal place to enjoy a lazy late morning breakfast. The Resort serves Indian, Chinese & Continental cuisine.",
    button: "View Details",
    img: "/images/a (21).JPG",
    reverse: false,
  },
  {
    title: "Holiday Tour Package",
    subtitle: "Best Holiday Tour Package With Us",
    description:
      "Start your life together on the right note—with the assurance that your Honeymoon will be the one you have always dreamed of. When you’re looking for a getaway with more value, resort De Park offers unique packages resort discounts. Discover our latest deals and resort special offers.",
    button: "View Details",
    img: "/images/a (7).JPG",
    reverse: true,
  },
 {
  title: "Hiking & Adventure",
  subtitle: "Explore The Outdoors",
  description:
    "Embark on breathtaking hikes and thrilling adventures around Manali. Discover scenic trails, lush forests, and panoramic views as you connect with nature. Our resort offers guided tours and all the essentials for a safe and memorable outdoor experience.",
  button: "View Details",
  img: "/images/a (9).JPG", // Example hiking image
  reverse: false, // image left, content right
}

];

export default function BestServices() {
  return (
    <div className="bg-white py-12 px-4 md:px-0 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium tracking-widest text-gray-700 mb-2">
          THE CASTLE RESORT MANALI
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-10">
          Best <em className='text-red-800 italic font-serif font-bold'>Services</em>
        </h1>

        <div className="flex flex-col ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${service.reverse ? 'md:flex-row-reverse' : ''} bg-white`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-72 md:h-96">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-[#f5f2ed]">
                <span className="uppercase tracking-[.2em] text-md font-medium text-gray-600 mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white uppercase tracking-wide font-medium rounded shadow transition">
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
