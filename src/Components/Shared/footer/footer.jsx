
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <img
            width={160}
            height={62}
            src="https://www.thecastleresort.com/img/logo-dark.png"
            alt="Hotel Logo"
            className="mb-4"
          />
          <p className="mt-6 text-sm text-gray-700">
            Nestled in the heart of the Himalayas, our Fagu Shimla Resort is the perfect getaway for relaxation, adventure, and breathtaking mountain views.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="mailto:thecastlevilla6@gmail.com" className="hover:underline">
                thecastlevilla6@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919805260347, 8350888932" className="hover:underline">
                +91 9805260347, 8350888932
              </a>
            </li>
            <li>
             Kanyal Road, Simsa Village, near Volvo bus stand, Manali, Kullu District, Himachal Pradesh 175131, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/yourhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/yourhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/yourhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-black hover:text-black"
            >
              <BsTwitterX size={24} />
            </a>
            <a
              href="https://www.youtube.com/yourhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-red-600 hover:text-red-700"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Info */}
      <div className="max-w-7xl mx-auto mt-10 text-center text-xs text-gray-600 border-t border-gray-300 pt-6">
        <p>
          &copy; {new Date().getFullYear()} Fagu Shimla Resort |{" "}
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>

        <p className="mt-4">
          All rights reserved. The images used are for representation purposes only.
        </p>
      </div>
    </footer>
  );
}
