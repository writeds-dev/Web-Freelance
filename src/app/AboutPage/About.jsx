import WhyBookWithUs from '../../Components/About/chooseus/Choose';
import Clients from '../../Components/About/client/Client';
import CombinedSection from '../../Components/Home/cottage/Cottage';
import HotelBenefits from '../../Components/About/Benifits/Benifits';
import BookYourHotel from '../../Components/Gallery/Contact/Contact';
import AboutUsFAQ from '../../Components/About/Faq/Faq';
import CircleImageComponent from '../../Components/About/Places/Places';

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
      {/* About Us Content */}
      <section id="story" className="py-5 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Welcome to <span className="text-red-700 font-semibold">The Castle Villa, Manali</span> — Your Home in the Hills
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 font-thin">
            Nestled in the heart of the majestic Himalayas, The Castle Villa, Manali offers a perfect blend of comfort, charm, and scenic beauty. Surrounded by snow-capped peaks and lush greenery, our boutique villa is designed to be a peaceful retreat for travelers seeking relaxation, adventure, or a romantic getaway.
          </p>
          <p className="text-lg md:text-xl text-black mb-6">
            At The Castle Villa, we believe in creating memorable experiences. Whether you're sipping tea on our sun-kissed balconies, enjoying the cozy warmth of our elegant interiors, or exploring the vibrant culture of Manali, every moment here feels special.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            With well-appointed rooms, personalized hospitality, and modern amenities wrapped in rustic charm, our villa promises a stay that feels both luxurious and homely. Whether you're a solo traveler, a couple, or a family, we’re here to ensure your visit to Manali is as enchanting as the mountains themselves.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Come stay with us — and experience Manali the Castle Villa way.
          </p>
        </div>
      </section>

      {/* Additional Sections */}
     <CircleImageComponent/>
      <WhyBookWithUs/>
      <Clients/>
      <CombinedSection/>
      <BookYourHotel/>
      <AboutUsFAQ/>
    </section>
  );
};

export default About;
