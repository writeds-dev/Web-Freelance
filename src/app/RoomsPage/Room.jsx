import RoomDetails from "../../Components/RoomsPage/RoomDet/Details";
import Cottage from "../../Components/Home/cottage/Cottage";
import MealTimes from "../../Components/RoomsPage/Meals/Meals";
import Testimonial from "../../Components/RoomsPage/Testimonial/Testimonial";
import FAQ from "../../Components/RoomsPage/Faq/Faq";

const Room = () => {
  return (
    <div>
      {/* Hero Section */}
    <div
  className="relative flex items-center justify-center h-[400px] md:h-[520px] bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1623728276928-965ffeb5d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D')",
  }}
>
  {/* Elegant semi-gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    {/* Main Title */}
    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      Rooms & Suites
    </h1>
    {/* Subtitle */}
    <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-2xl drop-shadow">
      Welcome to your peaceful escape. Discover spacious suites and cozy cottages surrounded by nature, comfort, and elegance.
    </p>
    {/* CTA Button */}
    <a
      href="/booking"
      className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-lg"
    >
      Book Now
    </a>
    {/* Breadcrumb */}
    <nav className="flex items-center space-x-3 text-white/90 text-base md:text-lg font-medium mt-6">
      <a href="/" className="hover:underline">Home</a>
      <span className="mx-1">|</span>
      <span className="text-white/70">Our Room</span>
    </nav>
  </div>
</div>


      {/* Room Details Section */}
      <RoomDetails />
      <Cottage/>
      <MealTimes/>
      <Testimonial/>
      <FAQ/>
    </div>
  );
};

export default Room;
