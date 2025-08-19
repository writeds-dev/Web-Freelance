import React, { useRef, useEffect } from 'react';
import "./index.css";

const packages = [
  { image: '/P/p-1.webp' },
  { image: '/P/p-2.webp' },
  { image: '/P/p-3.webp' },
  { image: '/P/p-4.webp' },
  { image: '/P/p-5.webp' },
  { image: '/room/r-1.JPG' },
  { image: '/room/r-3.JPG' },
  { image: '/room/r-4.JPG' },
  { image: '/room/r-5.JPG' },
  { image: '/room/r-6.JPG' },
  { image: '/room/r-7.JPG' },
  { image: '/room/r-8.JPG' },
  { image: '/room/r-9.JPG' },
  { image: '/room/r-10.JPG' },

];

const SLIDE_WIDTH = 350; // Adjust this if you change card width

const GallerySlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef();

  // Auto-slide logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    function autoScroll() {
      // If at end, scroll back to start, else scroll right
      if (
        Math.ceil(slider.scrollLeft + slider.offsetWidth) >= slider.scrollWidth
      ) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: SLIDE_WIDTH, behavior: 'smooth' });
      }
    }

    intervalRef.current = setInterval(autoScroll, 2500); // Slide every 2.5s

    return () => clearInterval(intervalRef.current);
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -SLIDE_WIDTH, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: SLIDE_WIDTH, behavior: 'smooth' });
  };

  return (
    <section id='gallery'  className="bg-white  text-gray-900 py-10 px-4 sm:px-8 md:px-20" aria-label="Hotel Gallery">
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
        {/* Slider Arrows */}
        <div className="relative">
          {/* Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative min-w-[320px] max-w-xs w-full aspect-[4/3] overflow-hidden bg-white shadow-md hover:shadow-2xl border border-gray-100 transform  transition duration-300 group flex-shrink-0 scroll-snap-align-start"
              >
                <img
                  src={pkg.image}
                  alt={`Hotel Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full  transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
