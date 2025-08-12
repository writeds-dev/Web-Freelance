
import React from "react";

const VideoPlayer = () => {
  return (
    <section className="relative min-h-screen w-full py-16 flex justify-center items-center ">
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        {/* Overlay content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute left-0 bottom-0 z-20 p-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow">
            Experience The Castle Resort
          </h2>
          <p className="mt-3 text-white/80 text-lg md:text-2xl max-w-2xl drop-shadow">
            Enjoy a stunning aerial view of our exclusive resort property.  
            Discover luxury, comfort, and tranquility—your perfect escape.
          </p>
        </div>

        {/* Video */}
        <video
          src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1754298601/home_drone_shot_boapio.mp4"
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

export default VideoPlayer;
