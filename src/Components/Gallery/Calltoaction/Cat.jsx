const CallToAction = () => {
  return (
    <section
      className="relative w-full h-[80vh] min-h-[440px] flex items-center justify-center bg-black"
      aria-label="Fine-dining video hero for hotel"
    >
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1754044590/Untitled_video_-_Made_with_Clipchamp_1_steena.mp4"
        title="Luxury Hotel Experience"
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        aria-describedby="video-caption"
      />

      {/* Solid and gradient overlay for strong text contrast */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Optional: for luxury feel, add a bottom fade gradient */}
    
      
      {/* CTA Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
          Experience Luxury & Hospitality
        </h1>
        <p className="text-white/90 text-xl md:text-2xl max-w-2xl mb-7 drop-shadow font-serif">
          Step into elegance at <span className="font-bold text-red-800"> Hotels</span>. 
          Enjoy fine dining, lavish rooms, and unmatched service in every stay.
        </p>
        <a
          href="/booking"
          className="inline-block bg-blue-500 hover:bg-blue-500 text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-xl"
        >
          Book Your Stay
        </a>
      </div>

      <p id="video-caption" className="sr-only">
        A video showcasing the luxury experience at  Hotel, highlighting dining, rooms, and ambiance.
      </p>
    </section>
  );
};

export default CallToAction;
