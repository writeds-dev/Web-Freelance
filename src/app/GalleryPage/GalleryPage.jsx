import React from 'react';
import PropertyImages from '../../Components/Gallery/Property/Property';
import RoomProp from '../../Components/Gallery/RoomProp/RoomProp';
import CallToAction from '../../Components/Gallery/Calltoaction/Cat';
import ContactPromo from '../../Components/Gallery/Contact/Contact';
const GalleryPage = () => {
  return (
    <div>
     <div
  className="relative flex items-center justify-center h-[400px] md:h-[520px] bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/a (30).JPG')",
  }}
>
  {/* Strong black overlay for text visibility */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 flex  flex-col items-center justify-center text-center px-4">
    {/* Main Title */}
       {/* Breadcrumb */}
    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Property Gallery
    </h1>
    {/* Subtitle */}
    <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-2xl drop-shadow">
      Take a visual tour of our hotel & resort. Discover elegant rooms, relaxing amenities, breathtaking views, and everything that makes your stay unforgettable.
    </p>
    {/* CTA Button */}
    <a
      href="#gallery"
      className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-lg"
    >
      View Gallery
    </a>
 
  </div>
</div>

      <PropertyImages/>
      <CallToAction/>
      <RoomProp/>
      <ContactPromo/>
    </div>
  );
};

export default GalleryPage;
