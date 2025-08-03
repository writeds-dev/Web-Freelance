import React from 'react';

const benefits = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png", // Award icon
    title: "Award-Winning Hospitality",
    desc: "Recognized for excellence in guest satisfaction and luxury amenities.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Room service icon
    title: "Premium Room Service",
    desc: "Enjoy 24/7 room service and world-class dining at your convenience.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // Insurance/Heart icon
    title: "Complete Guest Insurance",
    desc: "Your stay is protected with our comprehensive guest insurance policy.",
  },
];

export default function HotelBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Title & Subtitle */}
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <hr className="w-12 border-t-2 border-red-800 mr-4" />
              <span className="text-black-400 uppercase tracking-widest font-medium">Our Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 max-w-2xl mb-4">
              OUR HOTEL HAS BEEN LEADING IN HOSPITALITY SINCE 1982
            </h2>
          </div>
          <div className="max-w-xl text-left text-black space-y-4 ml-auto">
            <p>
              Discover why guests keep coming back to us! Our commitment to luxury, comfort, and outstanding service has set us apart for over four decades.
            </p>
            <p>
              From spacious rooms to exclusive amenities, every detail is designed for your memorable stay.
            </p>
          </div>
        </div>
        {/* Benefits Boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="border p-6 flex items-center bg-white">
              <div className="w-20 h-20 flex items-center justify-center bg-cyan-600 rounded-md mr-6">
                <img src={benefit.icon} alt={benefit.title} className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{benefit.title}</h3>
                <p className="text-black-700">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
