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
  { image: "/add/add-1.JPG" },
  { image: "/add/add-2.JPG" },
  { image: "/add/add-3.JPG" },
  { image: "/add/add-4.JPG" },
  { image: "/add/add-5.JPG" },
];

const RoomProp = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // match the gap utility below (gap-4 => 16px)
  const cardGap = 16;
  const [cardWidth, setCardWidth] = useState(300);
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Measure first card width (incl. gap)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const measure = () => {
      const firstCard = slider.querySelector("[data-card]");
      if (firstCard) {
        const w = firstCard.getBoundingClientRect().width;
        setCardWidth(Math.round(w + cardGap));
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cardGap]);

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

  // Auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const tick = () => {
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
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const goTo = (i) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-white text-gray-900 py-6 px-3 sm:px-6 md:px-8"
      aria-label="Room Property Images"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header (smaller) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#7D0C0C]">
              Explore <em className="italic font-serif text-black">Our</em>{" "}
              <span className="text-[#7D0C0C]">Room Images</span>
            </h2>
            <div className="w-16 h-[3px] bg-yellow-500 mt-2 rounded" />
          </div>
          <p className="text-black text-base sm:text-[1.05rem] max-w-sm leading-relaxed">
            Discover our beautiful rooms, cozy beds, spacious suites, and inviting decor.
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Narrower fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track (gap reduced to 4) */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                data-card
                className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[340px]
                           max-w-[85vw] w-full aspect-[3/2] overflow-hidden
                           bg-white shadow border border-gray-100
                           rounded-lg transform transition duration-300 group flex-shrink-0
                           scroll-snap-align-start"
              >
                <img
                  src={pkg.image}
                  alt={`Room Property Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition">
                  <div className="inline-block rounded bg-black/55 text-white text-[10px] px-1.5 py-0.5">
                    Image {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Smaller controls */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow text-lg"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow text-lg"
          >
            ›
          </button>

          {/* Smaller dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {packages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i
                    ? "w-5 bg-[#7D0C0C]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
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
