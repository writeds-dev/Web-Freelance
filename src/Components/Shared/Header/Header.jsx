import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-area rounded-b-lg tracking-wide z-50 md:absolute relative top-0 inset-x-0 max-w-5xl mx-auto bg-white shadow-md">
      <div className="flex items-center justify-center gap-6 px-6 py-3 relative">
        {/* Mobile Logo */}
        <Link to="/" className="cursor-pointer lg:hidden">
          <img
            width={140}
            height={55}
            src="https://www.thecastleresort.com/img/logo-dark.png"
            alt="Hotel Logo"
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
        <div className="lg:flex lg:space-x-10 hidden w-full justify-center items-center">
          <ul className="lg:flex lg:gap-x-10">
            <li>
              <Link
                to="/"
                className="header-text font-bold text-black"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="header-text font-bold text-black"
                onClick={handleLinkClick}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="header-text font-bold text-black"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
          </ul>

          {/* Center Logo */}
          <Link to="/" className="mx-0 block w-[120px]">
            <img
              src="https://www.thecastleresort.com/img/logo-dark.png"
              alt="Hotel Logo"
              width={120}
              height={50}
              className="h-auto w-full"
            />
          </Link>

          {/* Right Nav Items */}
          <ul className="lg:flex lg:gap-x-8">
            <li>
              <Link
                to="/about"
                className="header-text font-bold text-black"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="header-text font-bold text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
                onClick={handleLinkClick}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md rounded-b-lg px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block font-bold text-black"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/rooms"
                className="block font-bold text-black"
                onClick={handleLinkClick}
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block font-bold text-black"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-bold text-black"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="block font-bold text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
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
