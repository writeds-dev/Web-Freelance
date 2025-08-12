import React from 'react';

const CircleImageComponent = () => {
  const images = [
    {
      src: "/images/a (17).JPG", 
      alt: "Image 1"
    },
    {
      src: "/images/a (19).JPG", 
      alt: "Image 2"
    },
    {
      src: "/images/a (11).JPG", 
      alt: "Image 3"
    },
    {
      src: "/images/a (12).JPG", 
      alt: "Image 4"
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our <span className='text-red-800'>Era ?</span></h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg hover:shadow-2xl transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircleImageComponent;
