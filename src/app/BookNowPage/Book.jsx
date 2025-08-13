import React from 'react'
import ContactSection from '../../Components/BookNow/Form/Form'
const Book = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center h-[400px] md:h-[520px] bg-center bg-cover"
        style={{
          backgroundImage: "url('/P/p-1.webp')",
        }}
      >
        {/* Strong black overlay for text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          
          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Book Your Stay With Us
          </h1>
          {/* Subtitle */}
          <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-2xl drop-shadow font-thin">
            Reserve your room in minutes and start your unforgettable journey at our hotel. Enjoy luxurious comfort, premium amenities, and world-class hospitality—designed just for you.
          </p>
          {/* CTA Button */}
          <a
            href="#booking-form"
            className="inline-block bg-red-800 text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-lg hover:bg-red-700"
          >
            Book Now
          </a>
        </div>
      </div>
      <ContactSection/>
    </div>
  )
}

export default Book
