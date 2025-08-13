import React from 'react';

const visitingPlaces = [
  {
    name: 'Kufri',
    description: 'A popular hill station known for its scenic beauty, adventure activities, and the Himalayan Nature Park.',
    img: '/images/h-1.jpg',
  },
  {
    name: 'Mall Road, Shimla',
    description: 'A bustling street with shops, cafes, and beautiful views, perfect for a leisurely stroll or shopping.',
    img: '/images/h-3.jpg',
  },
  {
    name: 'The Ridge',
    description: 'A beautiful open space in Shimla, known for its stunning views and colonial architecture.',
    img: '/images/h-2.jpg',
  },
];

const RecentListings = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Nearby <em className='text-red-800 italic font-serif font-bold'>Visiting Places</em>
          </h2>
          <div className="h-1 w-16 bg-red-800 rounded mb-4" />
        </div>
        <p className="text-black max-w-2xl md:text-lg">
          Explore handpicked resorts in Fagu and nearby Shimla—ideal for family vacations, romantic escapes, or a peaceful Himalayan retreat. Experience breathtaking views, warm hospitality, and unforgettable moments.
        </p>
      </div>

      {/* Nearby Visiting Places */}
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visitingPlaces.map((place, i) => (
            <div key={i} className=" overflow-hidden shadow-xl bg-white transition hover:shadow-2xl relative">
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
