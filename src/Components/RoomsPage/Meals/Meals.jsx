// Meals.jsx
import React from "react";

const Meals = () => {
  return (
    <section
      className="bg-white text-gray-800"
      aria-labelledby="meals-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-12">
        
        {/* Left Section */}
        <div className="max-w-xl space-y-6 lg:w-1/2">
          <header>
            <h2
              id="meals-heading"
              className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
            >
              Enjoy <span className="text-red-800 underline">Fresh & Flavorful Dining</span> at Castle Villa, Manali
            </h2>
          </header>

          <p className="text-lg text-gray-600">
            Experience authentic Himachali hospitality with our thoughtfully curated
            menus. From sunrise breakfasts to cozy evening teas, every meal is prepared
            with fresh, locally sourced ingredients—making your mountain getaway even more memorable.
          </p>

          {/* Features */}
          <ul className="space-y-5 mt-8">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-red-800 flex-shrink-0 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Breakfast, Tea & Coffee
                </h3>
                <p className="text-gray-600">
                  Start your day with Himalayan views, hot parathas, freshly brewed coffee, and a variety of teas.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-red-800 flex-shrink-0 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Quality Cuisine & Hygienic Kitchen
                </h3>
                <p className="text-gray-600">
                  Our chefs prepare Indian, Continental, and Himachali dishes with the highest standards of hygiene and taste.
                </p>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="/book"
            className="inline-block mt-6 px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-lg shadow-md transition"
          >
            Explore Our Dining Experience
          </a>
        </div>

        {/* Image Section */}
        <figure className="w-full lg:w-1/2 p-0">
          <img
            src="/add/add-7.JPG"
            alt="Castle Villa Manali dining area with mountain view"
            className="w-full h-auto  shadow-lg object-cover"
            loading="lazy"
          />
          <figcaption className="sr-only">
            Elegant dining area at Castle Villa, Manali, offering scenic mountain views.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Meals;
