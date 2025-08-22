
import React, { useState, useEffect, useRef } from "react";

const RoomSection = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let counter = 1;
          const interval = setInterval(() => {
            if (counter <= 8) {
              setCount(counter);
              counter += 1;
            } else {
              clearInterval(interval);
            }
          }, 700);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const roomCategories = [
    {
      id: 1,
      title: "Super Deluxe Room",
      image: "/images/a (7).JPG",
      alt: "super deluxe room",
      description: "Experience the utmost luxury with top-notch amenities.",
      paragraph:
        "The Super Deluxe Room offers a spacious layout with a king-sized bed, a private balcony, and an en-suite jacuzzi. Perfect for an indulgent stay.",
    },
    {
      id: 2,
      title: "Premium Room",
      image: "/images/a (5).JPG",
      alt: "premium room",
      description:
        "A premium experience with comfortable spaces and high-end finishes.",
      paragraph:
        "Our Premium Room features a queen-sized bed, a cozy lounge area, and a modern bathroom for your relaxation.",
    },
  ];

  return (
    <section className="py-2 bg-white text-black">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-black">
          Our <em className="text-red-800 font-bold">Rooms</em>
        </h2>
        <p className="mt-2 text-lg text-black">
          Choose from our exclusive rooms for a memorable stay.
        </p>

        {/* Explore Our Rooms Button */}
       
      </div>

      {/* Room Categories Layout */}
      <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Rooms Counter */}
        <div
          ref={sectionRef}
          className="flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out bg-gradient-to-r from-red-700 to-red-800 text-white"
        >
          <div className="relative">
            <h3 className="mt-4 text-5xl lg:text-[10rem] font-semibold">
              {count}
              <sup className="absolute top-0 right-[-18] text-[5rem] text-red-900">
                {""}
              </sup>
            </h3>
          </div>
          <p className="mt-12 text-md font-light text-center">
            Discover the Perfect Room for Your Stay <br />
            Whether you're looking for a luxurious getaway or a cozy retreat,
            we have rooms tailored to meet your needs. Experience comfort,
            convenience, and exceptional service at every turn.
          </p>
        </div>

        {/* Render Room Categories */}
        {roomCategories.map((room) => (
          <div
            key={room.id}
            className="flex flex-col items-center p-6  hover:shadow-2xl transition-all duration-300 ease-in-out bg-white text-black hover:scale-105 transform"
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src={room.image}
                alt={room.alt}
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center">
              {room.title}
            </h3>
            {room.description && (
              <p className="mt-2 text-center text-lg">{room.description}</p>
            )}
            {room.paragraph && (
              <p className="mt-2 text-center text-black/70">
                {room.paragraph}
              </p>
            )}
          </div>
        ))}
      </div>
       <div className="mt-6 flex justify-center">
        </div>
    </section>
  );
};

export default RoomSection;
