
import WhyBookWithUs from '../../Components/About/chooseus/Choose';
import Clients from '../../Components/About/client/Client';
import CombinedSection from '../../Components/Home/cottage/Cottage';
import HotelBenefits from '../../Components/About/Benifits/Benifits';
import HotelStats from '../../Components/About/contains/Contains';
import BookYourHotel from '../../Components/Gallery/Contact/Contact';
import AboutUsFAQ from '../../Components/About/Faq/Faq';

const About = () => {
  return (
    <section>
      <div
        className="relative flex items-center justify-center h-[400px] md:h-[520px] bg-center bg-cover"
        style={{
          backgroundImage: "url('/P/p-1.webp')",
        }}
      >
        {/* Strong black overlay for text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-3 text-white/90 text-base md:text-lg font-medium mt-4 mb-4">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-1">|</span>
            <span className="text-white/70">About Us</span>
          </nav>
          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover Our Story
          </h1>
          {/* Subtitle */}
          <p className="text-white/90 text-xl md:text-2xl mb-6 max-w-2xl drop-shadow font-serif">
            Experience comfort, warmth, and a sense of belonging at our hotel. With a passion for genuine hospitality, we welcome travelers from around the world to relax, connect, and create lasting memories.
          </p>
          {/* CTA Button */}
          <a
            href="#story"
            className="inline-block bg-red-800  text-white text-lg font-bold rounded-full px-8 py-3 transition mt-2 shadow-lg"
          >
            Learn More About Us
          </a>
        </div>
      </div>
      <HotelBenefits/>
      <WhyBookWithUs/>
      <Clients/>
      <HotelStats/>
      <CombinedSection/>
      <BookYourHotel/>
      <AboutUsFAQ/>
    </section>
  );
};

export default About;
