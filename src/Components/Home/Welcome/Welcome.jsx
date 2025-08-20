import React from "react";

const offers = [
  {
    title: "Kick off Summer in Manali",
    desc:
      "Experience the refreshing summer breeze and scenic beauty of Manali. Stay at our luxurious resort villa and enjoy nature at its best.",
    img: "/images/a (9).JPG",
    href: "#",
    badge: "Seasonal",
  },
  {
    title: "Breakfast with Every Stay",
    desc:
      "Enjoy complimentary breakfast every morning during your stay at our luxurious villa in Manali. Taste the finest local delicacies and more.",
    img: "/images/a (24).JPG",
    href: "/rooms",
    badge: "Complimentary",
  },
  {
    title: "The Signature Collection – Exclusive Villas",
    desc:
      "Our Signature Collection offers exclusive villas designed for ultimate luxury. Nestled amidst the Himalayan foothills.",
    img: "/images/a (27).JPG",
    href: "#",
    badge: "Exclusive",
  },
];

export default function FeaturedOffers() {
  return (
    <section className="py-14 px-6 sm:px-8 lg:px-16 bg-white">
      <header className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Exclusive <span className="text-red-600">Offers</span>
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Featured special offers for your stay in Manali
        </p>
      </header>

      <ul
        role="list"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {offers.map((o, i) => (
          <li
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Media */}
            <div className="relative h-64 md:h-72 lg:h-80">
              <img
                src={o.img}
                alt={o.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              {/* Badge */}
              <span className="absolute top-4 left-4 rounded-full bg-white/90 text-gray-900 text-xs font-semibold tracking-wide px-3 py-1 shadow">
                {o.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                <a
                  href={o.href}
                  className="hover:text-red-600 transition-colors"
                >
                  {o.title}
                </a>
              </h3>
              <p className="mt-2 text-gray-600">{o.desc}</p>

              {/* CTA Row */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="/room"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 text-gray-800 px-5 py-2 text-sm font-semibold hover:bg-gray-50 transition"
                >
                  Learn More
                  <svg
                    className="h-4 w-4"
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

            {/* Subtle corner shine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-red-600/10 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
