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
  { image: "/Delux/d-1.JPG" },
  { image: "/Delux/d-2.JPG" },
  { image: "/Delux/d-3.JPG" },
  { image: "/Delux/d-4.JPG" },
  { image: "/Delux/d-5.JPG" },
  { image: "/Delux/d-6.JPG" },
  { image: "/Delux/d-7.JPG" },

  

];

const RoomProp = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const cardGap = 16;
  const [cardWidth, setCardWidth] = useState(250); // Adjusted the width for a more compact look
  const [active, setActive] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
      intervalRef.current = setInterval(tick, 3000);
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
      className="relative bg-gray-100 text-gray-900 py-6 px-3 sm:px-6 md:px-8"
      aria-label="Room Property Images"
    >
      <div className="max-w-5xl h-full mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#7D0C0C]">
              Explore <em className="italic text-gray-700">Our</em>{" "}
              <span className="text-[#7D0C0C]">Room Images</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-500 mt-2 rounded" />
          </div>
          <p className="text-gray-700 text-base sm:text-[1.05rem] max-w-sm leading-relaxed">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar py-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                data-card
                className="relative min-w-[250px] max-w-[85vw] w-full aspect-[3/2] bg-white shadow-lg rounded-xl transform transition duration-300 group flex-shrink-0 overflow-hidden"
              >
                <img
                  src={pkg.image}
                  alt={`Room Property Image ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="inline-block rounded bg-black/60 text-white text-sm px-2 py-1">
                    Image {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7D0C0C] text-white shadow-lg hover:bg-[#B32A2A] transition duration-300"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#7D0C0C] text-white shadow-lg hover:bg-[#B32A2A] transition duration-300"
          >
            ›
          </button>

          {/* Dots Navigation */}
          <div className="mt-6 flex justify-center gap-3">
            {packages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  active === i
                    ? "bg-[#7D0C0C] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
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
