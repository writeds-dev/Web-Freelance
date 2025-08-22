// BookYourVilla.jsx
import React from "react";

const BookYourVilla = () => {
  return (
    <section className="py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left section (Content) */}
        <div className="space-y-7">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-red-800 leading-tight mb-3">
            Book Your <span className="text-red-800">Private Villa</span>
            <br />
            at{" "}
            <span className="font-serif text-black">
              <em className="italic font-serif">Castle</em> Villa
            </span>
          </h1>

          <p className="text-lg text-gray-700 font-serif">
            Escape to spacious villas with private patios, garden views, and bespoke hospitality.
            Reserve your villa at Castle Villas and savor a serene stay where privacy, comfort,
            and elegance come together.
          </p>

          {/* Trust cues */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="sr-only">Guest rating</span>
              <div className="flex" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <span className="text-gray-700">4.9/5 from guests</span>
            </div>
            <div className="hidden sm:inline-block text-gray-300">•</div>
            <div className="text-gray-700">Free cancellation on select stays</div>
          </div>

          {/* Feature bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-[#333]" role="list">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 inline-block w-2 h-2 rounded-full bg-[#159bc2]" />
              Private patios & garden views
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 inline-block w-2 h-2 rounded-full bg-[#159bc2]" />
              Dedicated concierge service
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 inline-block w-2 h-2 rounded-full bg-[#159bc2]" />
              Chef-on-call & in-villa dining
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 inline-block w-2 h-2 rounded-full bg-[#159bc2]" />
              High-speed Wi-Fi & smart TV
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4" role="group" aria-label="Booking actions">
            <a
              href="/book"
              className="bg-[#159bc2] text-white px-8 py-3 rounded-full text-sm font-bold uppercase shadow hover:bg-[#127b97] transition  duration-300"
            >
              Book a Villa
            </a>
            <a
              href="/book"
              className="border border-[#159bc2] text-[#159bc2] px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-[#159bc210] transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Assistance */}
          <div className="mt-7 text-base text-[#333]">
            <p>
              Need Assistance?{" "}
              <a className="text-[#f17067] font-semibold hover:underline" href="tel:+16896989212" aria-label="Call Castle Villas support at +1 689 698 9212">
                Call +91 9805260347, 8350888932
              </a>
            </p>
          </div>
        </div>

        {/* Right section (Image with overlay) */}
        <div className="relative">
          <div className="relative w-full h-80 sm:h-96 overflow-hidden  shadow-2xl border-8 border-white">
            <img
              src="/add/add-11.JPG"
              alt="Private villa at Castle Villas with lush greenery and sunlit patio"
              className="w-full h-full object-cover  transform scale-105 transition duration-500 hover:scale-110"
              loading="eager"
            />
          </div>
          {/* Image caption */}
          <p className="sr-only">Castle Villas—luxury, privacy, and nature-forward design.</p>
        </div>
      </div>

      {/* SEO: JSON-LD for a lodging business / villa */}
      <script
        type="application/ld+json"
        // If using Next.js, consider moving this to <Head>.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Castle Villas",
            "url": "https://example.com/villas",
            "telephone": "+1-689-698-9212",
            "image": [
              "https://example.com/villas/v-hero.webp",
              "https://example.com/villas/v-interior.webp"
            ],
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Private patio", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Chef on call", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "High-speed Wi-Fi", "value": true }
            ],
            "address": { "@type": "PostalAddress", "addressCountry": "US" },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128"
            },
            "priceRange": "$$$"
          })
        }}
      />
    </section>
  );
};

export default BookYourVilla;
