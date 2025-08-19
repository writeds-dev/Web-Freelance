import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Menu and Close icons for mobile view
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Social Media and Mail Icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-black text-2xl font-bold hover:opacity-80 transition-all duration-300">
            <img
              src="/images/c-2.png"
              alt="Hotel Logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Center: Online Section with Mail */}
        <div className="flex items-center space-x-6  lg:flex">
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <button
          className="lg:hidden ml-auto text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="lg:flex lg:space-x-8 hidden w-full justify-center">
          {/* Navigation Links */}
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to="/"
                className="text-black text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="text-black text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-black text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="text-black bg-yellow-400 text-lg font-semibold hover:bg-yellow-200 hover:text-black px-4 py-2 rounded-full transition-all duration-300"
                onClick={handleLinkClick}
              >
                Book Now
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

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md rounded-b-lg px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-semibold text-black hover:text-blue-500 transition-all duration-300"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block font-semibold text-white bg-blue-700 px-6 py-3 rounded hover:bg-blue-800 transition-all duration-300"
                onClick={handleLinkClick}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
