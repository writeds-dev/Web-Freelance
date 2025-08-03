import React from 'react';

const Hero = () => {
  const videoUrl = 'https://res.cloudinary.com/dcqfpnls6/video/upload/v1754044590/Untitled_video_-_Made_with_Clipchamp_1_steena.mp4'; 

  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <div className="relative h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoUrl}
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content on top of the Video */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Welcome to Your Dream Stay</h1>
          <p className="text-xl sm:text-2xl mb-6">Experience luxury and comfort like never before.</p>
          <a href="#explore" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300">
          Explore More </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
