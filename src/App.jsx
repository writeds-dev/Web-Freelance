import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header1 from './Components/Shared/Header/Header';
import Footer from './Components/Shared/footer/footer';

// Home sections (used on the main route only)
import Hero from './Components/Home/hero/hero';
import About1 from './Components/Home/about/About';
import RoomsSuites from './Components/Home/room/Room';
import BestServices from './Components/Home/hotel-service/place';
import Cottage from './Components/Home/cottage/Cottage';
import Gallery from './Components/Home/gallary/Gallary';
import RecentListings from './Components/Home/service/Services';
import Works from './Components/Home/work/Work';
import RecentPosts from './Components/Home/blogs/blogs';

// Pages for routes
import Room from './app/RoomsPage/Room';
import GalleryPage from './app/GalleryPage/GalleryPage';
import About from './app/AboutPage/About';
import Book from './app/BookNowPage/Book';

const App = () => {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About1 />
              <RoomsSuites />
              <BestServices />
              <Cottage />
              <Gallery />
              <RecentListings />
              <Works />
              <RecentPosts />
            </>
          }
        />
        <Route path="/rooms" element={<Room />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
