import React from "react";

const RoomsVideoSection = () => {
  return (
    <section className="relative w-full py-12 flex justify-center items-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative w-full max-w-6xl overflow-hidden  border border-gray-200">
        {/* Overlay content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 bottom-0 z-20 p-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
            Explore Our Rooms
          </h2>
          <p className="mt-3 text-white/80 text-lg md:text-2xl max-w-2xl drop-shadow">
            Discover elegant rooms with breathtaking views.  
            Comfort and luxury await you in every corner of The Castle Villa.
          </p>
        </div>

        {/* Video */}
        <video
          src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1754299703/rooms-drone-shot_bkxwbp.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full h-[400px] md:h-[650px] object-cover bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default RoomsVideoSection;
