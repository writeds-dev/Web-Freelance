import React from 'react';

const listings = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60',
    title: 'Himalayan Bliss Resort',
    location: 'Fagu, Shimla',
    price: '₹7,500/night',
    description: 'Wake up to panoramic mountain views, enjoy fresh air, and experience Himachali hospitality at its best. Perfect for families and couples.',
    features: [
      'Mountain-view Rooms',
      'Farm-to-Table Dining',
      'Bonfire Evenings',
      'Guided Nature Trails',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60',
    title: 'Apple Orchard Retreat',
    location: 'Fagu, Near Kufri',
    price: '₹6,200/night',
    description: 'Nestled amidst apple orchards, our retreat offers serenity, organic cuisine, and cozy cottages with private balconies.',
    features: [
      'Cottage Suites',
      'Organic Cuisine',
      'Apple Orchard Walks',
      'Yoga Pavilion',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&auto=format&fit=crop&q=60',
    title: 'Cloudscape Eco Resort',
    location: 'Mashobra, Shimla',
    price: '₹8,900/night',
    description: 'Sustainable luxury surrounded by cedar forests. Relax with spa treatments, adventure activities, and soul-soothing views.',
    features: [
      'Eco-friendly Villas',
      'Spa & Wellness',
      'Adventure Sports',
      'Kids Activity Zone',
    ],
  },
];

const RecentListings = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-2">Recent 
           <em className='text-red-800 italic font-serif font-bold'>  Listings </em>in Manali</h2>
          <div className="h-1 w-16 bg-red-800 rounded mb-4" />
        </div>
        <p className="text-black max-w-2xl md:text-lg">
          Explore handpicked resorts in Fagu and nearby Shimla—ideal for family vacations, romantic escapes, or a peaceful Himalayan retreat. Experience breathtaking views, warm hospitality, and unforgettable moments.
        </p>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden shadow-xl bg-white transition hover:shadow-2xl relative"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Card Content (visible at all times) */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500">{item.location}</span>
                <span className="text-blue-700 font-semibold">{item.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <button className="inline-block px-8 py-3 text-xl font-bold text-white bg-blue-500 rounded-full shadow hover:bg-blue-600 transition">
          View All Resorts
        </button>
      </div>
    </div>
  );
};

export default RecentListings;
