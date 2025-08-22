import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons
import { useEffect } from 'react';

import Header1 from './Components/Shared/Header/Header';
import Footer from './Components/Shared/footer/footer';

// Home sections (used on the main route only)
import Hero from './Components/Home/hero/hero';
import About1 from './Components/Home/about/About';
import RoomsSuites from './Components/Home/room/Room';
import BestServices from './Components/Home/hotel-service/place';
import Cottage from './Components/Home/cottage/Cottage';
import Gallery from './Components/Home/gallary/Gallary';
import WelCome from './Components/Home/Welcome/Welcome';
import RecentListings from './Components/Home/service/Services';
import Works from './Components/Home/work/Work';
import VideoPlayer from './Components/Home/video/Video'; 
import FAQ from './Components/Home/Faq/Faq'; 
// Pages for routes
import Room from './app/RoomsPage/Room';
import GalleryPage from './app/GalleryPage/GalleryPage';
import About from './app/AboutPage/About';
import Book from './app/BookNowPage/Book';

import ScrollToTop from './Components/Scroll/Scroll';

const App = () => {
  // Dynamically loading the Tawk.to script using useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68969ec2171f1719311edad5/1j265oaf7'; 
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []);

  return (
    <BrowserRouter>
      <Header1 />
      <ScrollToTop /> {/* Include the ScrollToTop component here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About1 />
              <RoomsSuites />
              <Cottage />
              <BestServices />
              <VideoPlayer />
              <WelCome />
              <Gallery />
              <Works />
              <RecentListings />
              <FAQ />
            </>
          }
        />
        <Route path="/rooms" element={<Room />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />

      {/* Floating Icons (WhatsApp and Chatbot) */}
      <div className="fixed bottom-20 right-7 z-50 flex flex-col items-center gap-5">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/918350888932" // Correct format without the country code space
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transform transition duration-300 ease-in-out"
        >
          <FaWhatsapp size={30} color="#fff" />
        </a>

        {/* Tawk.to Chatbot Icon */}
      </div>
    </BrowserRouter>
  );
};

export default App;
