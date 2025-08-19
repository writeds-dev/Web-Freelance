// ServicesShowcase.jsx
// Fully responsive + a11y + mobile-friendly tap targets



const items = [
  {
    title: "Transportation",
    blurb:
      "Airport pickups, local rides, and sightseeing transfers on request.",
    icon: (
      // Plane
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 text-green-200/90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.24 4.26c.49.49.49 1.28 0 1.77l-6.2 6.2 1.06 6.72-1.98 1.98-2.92-5.6-5.6-2.92 1.98-1.98 6.72 1.06 6.2-6.2a1.25 1.25 0 011.77 0z"
        />
      </svg>
    ),
  },
  {
    title: "Wi-Fi and Internet",
    blurb: "Fast, reliable Wi-Fi across rooms and common areas.",
    icon: (
      // Router/Wifi
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 text-green-200/90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15h18M6 15v3m12-3v3M6 12a6 6 0 0112 0M8 12a4 4 0 018 0"
        />
      </svg>
    ),
  },
  {
    title: "Off-Road Adventure",
    blurb:
      "Thrilling guided off-road experiences through rugged Himalayan terrain, perfect for adrenaline seekers.",
    icon: (
      // Off-road vehicle / jeep-like icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 text-green-200/90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13h18l-2-5H5l-2 5zm2 0v6m14-6v6M7 19a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM6 9l1-3h10l1 3"
        />
      </svg>
    ),
  },
  {
    title: "Room Services",
    blurb: "In-room dining, daily housekeeping, and on-call assistance.",
    icon: (
      // Bed
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 text-green-200/90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h14a4 4 0 014 4v5h-2v-3H5v3H3v-9zM5 10V7a2 2 0 114 0v3"
        />
      </svg>
    ),
  },
];

const Card = ({ icon, title, blurb }) => (
  <div
    className="rounded-lg bg-[#141414] ring-1 ring-white/5 p-6 xs:p-7 sm:p-8 h-full
               transition-transform hover:-translate-y-0.5
               focus-within:ring-2 focus-within:ring-green-300/30"
  >
    <div className="mb-4 xs:mb-5 sm:mb-6" aria-hidden="true">
      {icon}
    </div>
    <h3 className="text-xl xs:text-[1.35rem] sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-2.5 break-words">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed text-[0.95rem] sm:text-base">
      {blurb}
    </p>
  </div>
);

function PhoneLinks({ numbers }) {
  // Render each number as its own tap-friendly link
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {numbers.map((n, idx) => {
        const clean = n.replace(/[^\d+]/g, "");
        return (
          <a
            key={idx}
            href={`tel:${clean}`}
            className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2.5
                       rounded-md ring-1 ring-white/10 bg-[#1a1f1a] text-white
                       text-sm sm:text-base font-semibold tracking-wide
                       hover:bg-[#1f261f] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300/40"
          >
            {n.trim()}
          </a>
        );
      })}
    </div>
  );
}

export default function ServicesShowcase({
  heading = "Enhancing Your Stay",
  subheading = "With Exclusive Services",
  phoneLabel = "For More Information",
  phoneNumber = "+ 9805260347,8350888932", // accepts comma-separated list
}) {
  const phoneNumbers = phoneNumber.split(",").map((n) => n.trim()).filter(Boolean);

  return (
    <section className="bg-[#0b0b0b] text-white">
      {/* Max width and responsive paddings */}
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Stack on mobile, 2-cols from lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs xs:text-sm tracking-wider text-gray-300 mb-4 xs:mb-5 sm:mb-6">
              <span className="text-lg xs:text-xl leading-none">→</span>
              <span className="uppercase">Service</span>
            </div>

            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 xs:mb-8 lg:mb-10">
              {heading}
              <br className="hidden sm:block" /> {subheading}
            </h2>

            {/* Phone / CTA block */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div
                className="shrink-0 w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-full bg-[#141a14]
                           ring-1 ring-white/10 flex items-center justify-center"
                aria-hidden="true"
              >
                {/* Phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 xs:w-7 xs:h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 5.25c0 9.042 7.458 16.5 16.5 16.5.86 0 1.69-.12 2.475-.345a1.125 1.125 0 00.825-1.08v-3.21a1.125 1.125 0 00-1.125-1.125H18a1.125 1.125 0 00-1.054.72l-.517 1.293a1.125 1.125 0 01-1.2.69 12.036 12.036 0 01-7.462-7.462 1.125 1.125 0 01.69-1.2l1.293-.517A1.125 1.125 0 0010.5 7.5V3.375A1.125 1.125 0 009.375 2.25H6.165c-.499 0-.935.33-1.08.825A16.457 16.457 0 002.25 5.25z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-gray-400 text-sm sm:text-base mb-2">
                  {phoneLabel}
                </p>

                {/* Multiple, tap-friendly phone links */}
                <PhoneLinks numbers={phoneNumbers} />
              </div>
            </div>
          </div>

          {/* Right: Responsive grid of cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8
                       content-start"
          >
            {items.map((it, i) => (
              <Card key={i} {...it} />
            ))}
          </div>
        </div>

        {/* Optional: add some bottom spacing on very small screens so content breathes */}
        <div className="mt-10 sm:mt-12 lg:mt-0" />
      </div>
    </section>
  );
}
