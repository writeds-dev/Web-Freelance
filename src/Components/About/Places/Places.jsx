import React from 'react';

const CircleImageComponent = () => {
  const images = [
    {
      src: "/images/a (17).JPG",
      alt: "Image 1",
      caption: "Unforgettable Moments"
    },
    {
      src: "/images/a (19).JPG",
      alt: "Image 2",
      caption: "Serenity and Calm"
    },
    {
      src: "/images/a (11).JPG",
      alt: "Image 3",
      caption: "Timeless Beauty"
    },
    {
      src: "/images/a (12).JPG",
      alt: "Image 4",
      caption: "A New Era"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-red-800">Era: A Visual Journey</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore a collection of moments captured through time that define the essence of our journey. Each image tells a unique story, reflecting the beauty, serenity, and timeless nature of our experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg group-hover:shadow-2xl transition duration-300"
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-sm font-semibold transition-opacity duration-300 rounded-full">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleImageComponent;
