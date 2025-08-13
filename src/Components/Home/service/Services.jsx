import React from 'react';

const visitingPlaces = [
  {
    name: 'Solang Valley',
    description: 'A beautiful valley known for adventure sports like paragliding, skiing, and zorbing, with breathtaking views of the snow-capped peaks.',
    img: '/new/solang.jpg',
  },
  {
    name: 'Hadimba Temple',
    description: 'A famous ancient temple surrounded by cedar forests, dedicated to the goddess Hadimba, showcasing unique architecture.',
    img: '/new/h-2 (2).jpg',
  },
  {
    name: 'Rohtang Pass',
    description: 'A high mountain pass offering panoramic views of the snow-covered Himalayas, popular for skiing and snowboarding.',
    img: '/new/rohtang.jpg',
  },
  {
    name: 'Old Manali',
    description: 'A quaint village area with old-world charm, vibrant cafes, and beautiful riverside views, perfect for a relaxing getaway.',
    img: '/new/manali.jpg',
  },
  {
    name: 'Manu Temple',
    description: 'A sacred temple dedicated to the sage Manu, located in Old Manali, offering a peaceful atmosphere and stunning views of the valley.',
    img: '/new/h-1.jpeg',
  },
  {
    name: 'Bhrigu Lake',
    description: 'A high-altitude lake surrounded by alpine meadows, popular for trekking and known for its breathtaking scenery.',
    img: '/new/d-4.jpg',
  },
];

const RecentListings = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-4">
            <em className='text-red-800 italic font-serif font-bold'>Visiting Places</em> in Manali
          </h2>
          <div className="h-1 w-16 bg-red-800 rounded mb-4" />
        </div>
        <p className="text-black max-w-2xl md:text-lg">
          Explore handpicked places in Manali—ideal for adventure seekers, nature lovers, and those looking for a peaceful retreat in the Himalayas.
        </p>
      </div>

      {/* Nearby Visiting Places */}
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visitingPlaces.map((place, i) => (
            <div key={i} className="overflow-hidden shadow-xl bg-white transition hover:shadow-2xl relative">
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
