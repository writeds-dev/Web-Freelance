import React from 'react';

const packages = [
  { image: '/images/a (22).JPG' },
  { image: '/images/a (12).JPG' },
  { image: '/add/new-1.JPG' },
  { image: '/add/add-2.JPG' },
  { image: '/Delux/d-4.JPG' },
  { image: '/Delux/d-6.JPG' },
  { image: '/Delux/d-7.JPG' },
  { image: '/add/add-1.JPG' },
  { image: '/add/add-11.JPG' },
  { image: '/room/r-1.JPG' },
  { image: '/Delux/d-8.JPG' },
  { image: '/add/add-9.JPG' },
  

  
  
  
];

const Gallery = () => {
  return (
    <section className="bg-white text-gray-900 py-10 px-4 sm:px-8 md:px-20" aria-label="Hotel Gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Discover <em className="italic font-serif text-black">Our</em> <span className="text-[#7D0C0C]">Hotel Gallery</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mt-3 rounded"></div>
          </div>
          <p className="text-black text-lg max-w-md leading-relaxed">
            Explore a curated selection of our hotel's finest spaces, from stylish rooms to relaxing lounges and vibrant dining. Get inspired for your next unforgettable stay!
          </p>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative aspect-[4/3]  overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-100 transform hover:-translate-y-1 transition duration-300 group"
            >
              <img
                src={pkg.image}
                alt={`Hotel Gallery Image ${index + 1}`}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
