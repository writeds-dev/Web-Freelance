import React from "react";

const FeaturedOffers = () => {
  return (
    <div className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-900">
        Exclusive <span  className="text-red-800"> Offers</span>
      </h2>
      <h3 className="text-2xl font-semibold text-center text-gray-600 mb-10">
        Featured Special Offers for Your Stay in Manali
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Offer 1 */}
        <div className="bg-white shadow-lg  overflow-hidden">
          <img
            src="/images/a (9).JPG"
            alt="Kick off Summer in Manali"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900">
              Kick off Summer in Manali
            </h4>
            <p className="text-gray-600 mt-2">
              Experience the refreshing summer breeze and scenic beauty of Manali. Stay at our luxurious resort villa and enjoy nature at its best.
            </p>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mt-4"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L16.586 10H3a1 1 0 110-2h13.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="bg-white shadow-lg  overflow-hidden">
          <img
            src="/images/a (24).JPG"
            alt="Free Breakfast at Resort"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900">
              Breakfast with Every Stay
            </h4>
            <p className="text-gray-600 mt-2">
              Enjoy complimentary breakfast every morning during your stay at our luxurious villa in Manali. Taste the finest local delicacies and more.
            </p>
            <a
              href="/rooms"
              className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mt-4"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L16.586 10H3a1 1 0 110-2h13.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Offer 3 */}
        <div className="bg-white shadow-lg  overflow-hidden">
          <img
            src="/images/a (27).JPG"
            alt="The Signature Collection"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900">
              The Signature Collection – Exclusive Villas
            </h4>
            <p className="text-gray-600 mt-2">
              Our Signature Collection offers exclusive villas designed for ultimate luxury. Nestled amidst the Himalayan foothills, enjoy the serene beauty of Manali in absolute privacy.
            </p>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-900 inline-flex items-center mt-4"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L16.586 10H3a1 1 0 110-2h13.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOffers;
