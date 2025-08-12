import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaHome, FaBed, FaImage, FaInfoCircle, FaClipboardCheck } from 'react-icons/fa'; // Social Media Icons and Navigation Icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [location, setLocation] = useState('India'); // Fixed location as "India"

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-area bg-white shadow-md z-50 relative">
      {/* Main Navigation Bar */}
      <div className="bg-white py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Left: Mobile Logo */}
          <Link to="/" className="cursor-pointer lg:hidden">
            <img
              width={120} // Smaller logo width
              height={50} // Smaller logo height
              src="https://www.thecastleresort.com/img/logo-dark.png"
              alt="Hotel Logo"
              className="transition-all duration-300 transform hover:scale-110 hover:text-blue-600"
            />
          </Link>

          {/* Hamburger Menu Button (mobile only) */}
          <button
            className="lg:hidden ml-auto text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="lg:flex lg:space-x-10 hidden w-full justify-between items-center">
            {/* Left Navigation with Logo */}
            <div className="flex gap-8 items-center">
              <Link to="/" className="mx-0 block w-[120px]">
                <img
                  src="https://www.thecastleresort.com/img/logo-dark.png"
                  alt="Hotel Logo"
                  width={35} // Smaller logo width
                  height={40} // Smaller logo height
                  className="h-auto w-full transition-all duration-300 transform hover:scale-110"
                />
              </Link>
            </div>

            {/* Right Navigation with Links and Social Media Icons */}
            <div className="flex items-center gap-6">
              <ul className="lg:flex lg:gap-x-8">
                <li>
                  <Link
                    to="/"
                    className="font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                  >
                    <FaHome className="inline-block mr-2" size={18} /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rooms"
                    className="font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                  >
                    <FaBed className="inline-block mr-2" size={18} /> Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                  >
                    <FaImage className="inline-block mr-2" size={18} /> Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                  >
                    <FaInfoCircle className="inline-block mr-2" size={18} /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book"
                    className="font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                  >
                    <FaClipboardCheck className="inline-block mr-2" size={18} /> Book Now
                  </Link>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div className="flex space-x-5">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebook size={18} color="white" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram size={18} color="white" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaTwitter size={18} color="white" />
                </a>
                <a
                  href="https://wa.me/918350888932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <FaWhatsapp size={18} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md rounded-b-lg px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                onClick={handleLinkClick}
              >
                <FaHome className="inline-block mr-2" size={18} /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                onClick={handleLinkClick}
              >
                <FaBed className="inline-block mr-2" size={18} /> Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                onClick={handleLinkClick}
              >
                <FaImage className="inline-block mr-2" size={18} /> Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300 hover:border-b-2 hover:border-blue-500 pb-1"
                onClick={handleLinkClick}
              >
                <FaInfoCircle className="inline-block mr-2" size={18} /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block font-semibold text-white bg-blue-700 px-6 py-3 rounded hover:bg-blue-800 transition-all duration-300"
                onClick={handleLinkClick}
              >
                <FaClipboardCheck className="inline-block mr-2" size={18} /> Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
