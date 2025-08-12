const BookYourHotel = () => {
  return (
    <section className=" py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left section (Content) */}
        <div className="space-y-7">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-red-800 leading-tight mb-3">
            Book Your <span className="text-red-800">Perfect Stay</span>
            <br />
            at <span className="font-serif text-black"><em className="italic font-serif">Castle</em> Resorts</span>
          </h2>
          <p className="text-lg text-gray-700 font-serif">
            Discover elegance, comfort, and world-class hospitality. Reserve your suite or cottage at Tabla and enjoy a memorable experience—where every guest is treated like family.
          </p>
          <div className="flex gap-4">
            <a
              href="/book"
              className="bg-[#159bc2] text-white px-8 py-3 rounded-full text-md font-bold uppercase shadow hover:bg-[#127b97] transition duration-300"
            >
              Contact Now
            </a>
          </div>
          <div className="mt-7 text-base text-[#333]">
            <p>
              Need Assistance?{" "}
              <span className="text-[#f17067] font-semibold">Call +1 (689) 698-9212</span>
            </p>
          </div>
        </div>

        {/* Right section (Image with overlay) */}
        <div className="relative">
          <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
            <img
              src="/P/p-2.webp"
              alt="Luxury hotel suite"
              className="w-full h-full object-cover rounded-2xl transform scale-105 transition duration-500 hover:scale-110"
            />
            {/* Floating secondary image */}
            <div className="absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-white p-1.5 rounded-xl shadow-xl border-2 border-[#fbe7e7]">
              <img
                src="/P/p-4.webp"
                alt="Cozy hotel room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourHotel;
