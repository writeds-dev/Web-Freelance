import React, { useRef, useEffect, useState } from "react";
import "./index.css";

const packages = [
  { image: "/images/a (2).JPG" },
  { image: "/images/a (12).JPG" },
  { image: "/images/a (21).JPG" },
  { image: "/images/a (1).JPG" },
  { image: "/images/a (7).JPG" },
  { image: "/images/a (10).JPG" },
  { image: "/images/a (18).JPG" },
  { image: "/images/a (22).JPG" },
  { image: "/images/a (23).JPG" },
  { image: "/images/a (24).JPG" },
];

const RoomProp = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const cardGap = 32; // gap-8 = 2rem = 32px
  const [cardWidth, setCardWidth] = useState(350);
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Measure first card width (incl. gap) for precise scroll steps
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const measure = () => {
      const firstCard = slider.querySelector("[data-card]");
      if (firstCard) {
        const w = firstCard.getBoundingClientRect().width;
        setCardWidth(Math.round(w + cardGap)); // include the gap
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Update active dot on scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const idx = Math.round(slider.scrollLeft / cardWidth);
      setActive(idx);
    };
    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, [cardWidth]);

  // Pause when not visible
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => setIsVisible(entries[0]?.isIntersecting ?? true),
      { root: null, threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-scroll (RTL feeling: we move left each tick)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const tick = () => {
      // If at the start, jump to the end (for endless feel)
      if (slider.scrollLeft <= 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: "auto" });
      }
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    };

    const shouldRun = !isHover && isVisible;
    if (shouldRun) {
      intervalRef.current = setInterval(tick, 2800);
    }
    return () => clearInterval(intervalRef.current);
  }, [cardWidth, isHover, isVisible]);

  const prev = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (slider.scrollLeft <= 0) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: "auto" });
    }
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const next = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    // If near the end, go a bit more so we keep wrapping feel
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const goTo = (i) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-white text-gray-900 py-10 px-4 sm:px-8 md:px-20"
      aria-label="Room Property Images"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Explore{" "}
              <em className="italic font-serif text-black">Our</em>{" "}
              <span className="text-[#7D0C0C]">Room Images</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mt-3 rounded" />
          </div>
          <p className="text-black text-lg max-w-md leading-relaxed">
            Discover our beautiful rooms, cozy beds, spacious suites, and inviting decor. Each image showcases the comfort and style waiting for you during your stay.
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Fades (left/right) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                data-card
                className="relative min-w-[260px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[420px]
                           max-w-[85vw] w-full aspect-[4/3] overflow-hidden
                           bg-white shadow-md hover:shadow-2xl border border-gray-100
                           rounded-xl transform transition duration-300 group flex-shrink-0
                           scroll-snap-align-start"
              >
                <img
                  src={pkg.image}
                  alt={`Room Property Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Caption on hover (optional) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="inline-block rounded-md bg-black/55 text-white text-xs px-2 py-1">
                    Image {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  active === i ? "w-6 bg-[#7D0C0C]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomProp;
