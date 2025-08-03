import React, { useRef, useEffect } from 'react';
import "./index.css";

const packages = [
  { image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60' },
  { image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60' },
  { image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&auto=format&fit=crop&q=60' },
  { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60' },
  { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=60' },
  { image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=600&auto=format&fit=crop&q=60' },
];

const SLIDE_WIDTH = 350; 

const RoomProp = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef();

  // Auto-slide logic: right-to-left
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function autoScroll() {
      // If at the beginning, scroll to end, else scroll left
      if (slider.scrollLeft === 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -SLIDE_WIDTH, behavior: 'smooth' });
      }
    }

    intervalRef.current = setInterval(autoScroll, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="bg-white text-gray-900 py-10 px-4 sm:px-8 md:px-20" aria-label="Room Property Images">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Explore <em className="italic font-serif text-black">Our</em> <span className="text-[#7D0C0C]">Room Images</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mt-3 rounded"></div>
          </div>
          <p className="text-black text-lg max-w-md leading-relaxed">
            Discover our beautiful rooms, cozy beds, spacious suites, and inviting decor. Each image showcases the comfort and style waiting for you during your stay.
          </p>
        </div>
        {/* Image Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative min-w-[320px] max-w-xs w-full aspect-[4/3] overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-100 transform transition duration-300 group flex-shrink-0 scroll-snap-align-start"
              >
                <img
                  src={pkg.image}
                  alt={`Room Property Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomProp;
