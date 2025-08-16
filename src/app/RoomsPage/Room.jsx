import RoomDetails from "../../Components/RoomsPage/RoomDet/Details";
import Cottage from "../../Components/Home/cottage/Cottage";
import MealTimes from "../../Components/RoomsPage/Meals/Meals";
import Testimonial from "../../Components/RoomsPage/Testimonial/Testimonial";
import FAQ from "../../Components/RoomsPage/Faq/Faq";
import RoomsVideoSection from "../../Components/RoomsPage/Vedio/Video";
import NearbyPlaces from "../../Components/RoomsPage/Places/Places";
import ServicesShowcase from "../../Components/RoomsPage/Services/Service";

const Room = () => {
  return (
    <div>
      {/* Hero Section */}
    <div
  className="relative flex items-center justify-center h-[400px] md:h-[520px] bg-center bg-cover"
  style={{
    backgroundImage:
      "url('/images/a (25).JPG')",
  }}
>
  {/* Elegant semi-gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    {/* Main Title */}
    
    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      Rooms & Suites
    </h1>
    {/* Subtitle */}
   <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-2xl drop-shadow">
  Experience the ultimate getaway. Explore luxurious villas offering stunning views, serene surroundings, and unmatched comfort.
</p>

    {/* CTA Button */}
    <a
      href="/booking"
      className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-lg"
    >
      Book Now
    </a>
   
  </div>
</div>


      {/* Room Details Section */}
      <RoomDetails />
      <Cottage/>
      <NearbyPlaces/>
      <RoomsVideoSection/>
      <MealTimes/>
      <Testimonial/>
      <ServicesShowcase/>
      <FAQ/>
    </div>
  );
};

export default Room;
