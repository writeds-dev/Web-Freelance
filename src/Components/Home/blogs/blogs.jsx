import React from 'react';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    title: '5 Must-Try Dishes at Our Castle Restaurant',
    meta: 'Castle Chef   |   March 18, 2025   |   3 Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: 'Top 10 Things to Pack for Your Mountain Getaway',
    meta: 'Travel Expert   |   February 10, 2025   |   No Comments',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    title: 'How Our Resort Makes Every Stay Feel Like Home',
    meta: 'Resort Manager   |   January 27, 2025   |   2 Comments',
  },
];

export default function RecentPosts() {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4 text-red-600 font-semibold tracking-widest text-xs">
          — FROM OUR BLOG
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-6 uppercase tracking-tight">
          Our <span className="text-black">Recent</span> Posts
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Stories, tips, and guides from the Castle Resort team to help you experience the best of our restaurant, hotel, and travel adventures in 2025.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-t-lg"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-red-600 transition-colors">{post.title}</h3>
              <div className="text-gray-500 text-sm">{post.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
