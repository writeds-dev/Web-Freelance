import React, { useState, useCallback } from "react";

const testimonials = [
  {
    text:
      "The Castle Villa felt like a boutique hideaway in the hills. Woke up to snow peaks, slept to pine-scented air. Staff went above and beyond—hot chai ready after every chilly evening walk!",
    name: "Aarav Mehta",
    role: "Weekend Getaway",
  },
  {
    text:
      "An unforgettable stay! The property offers breathtaking views that you can enjoy right from your room or while relaxing in the common areas. The food was absolutely delicious, with a variety of dishes that felt fresh and full of flavor. Combined with warm hospitality and a serene atmosphere, it’s the perfect place to unwind and indulge. Highly recommended!",
    name: "Neha & Kunal",
    role: "Adventure Couple",
  },
  {
    text:
      "Spacious rooms, spotless bathrooms, and those balcony views of Manali valley—wow. Kids loved the lawn games while we enjoyed quiet coffee on the deck.",
    name: "Priya Sharma",
    role: "Family Guest",
  },
  {
    text:
      "Reliable Wi-Fi, peaceful workspace, and room service right on time. I logged calls all day and hit Old Manali by evening. Great pick for remote workers.",
    name: "John Williams",
    role: "Remote Professional",
  },
  {
    text:
      "We celebrated our anniversary here—private candlelight dinner and rose décor done tastefully. The team captured photos against the mountain backdrop. Truly memorable.",
    name: "Ritika & Raj",
    role: "Celebration Stay",
  },
  {
    text:
      "Booked Castle Villa for a small offsite. Meeting area was set up early, coffee kept flowing, and airport transfers were smooth. Everyone loved the bonfire night.",
    name: "Meera Verma",
    role: "Corporate Retreat Lead",
  },
  {
    text:
      "Photographer’s dream—golden light over the Pir Panjal right from the balcony. Staff tipped me off to a secret viewpoint nearby. Got my best shots of the trip.",
    name: "Rajat Kumar",
    role: "Travel Photographer",
  },
  {
    text:
      "Local touches everywhere—homemade jams at breakfast, kadhai maggi on request, and warm blankets by the fire. Feels like home, but with luxury.",
    name: "Simran Kaur",
    role: "Solo Traveler",
  },
];

const Dot = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`w-3 h-3 rounded-full transition-transform ${
      active ? "bg-sky-500 scale-125" : "bg-gray-300"
    }`}
  />
);

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const len = testimonials.length;

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % len),
    [len]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + len) % len),
    [len]
  );

  const handleKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[60vh]  relative px-4 py-8 rounded-lg shadow-lg"
      onKeyDown={handleKey}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      {/* Testimonial Text */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
        <p className="text-2xl md:text-3xl text-center italic text-gray-800">
          “{testimonials[current].text}”
        </p>
      </div>

      {/* Name & Role */}
      <div className="mt-6 text-center">
        <span className="text-3xl font-bold text-gray-800">
          {testimonials[current].name}
        </span>
        <span className="text-xl text-gray-600 italic mt-1 block">
          {testimonials[current].role}
        </span>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prev}
          className="px-6 py-3 rounded-full bg-red-800 text-white text-lg hover:bg-gradient-to-l transition-all"
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <Dot
              key={idx}
              active={idx === current}
              onClick={() => setCurrent(idx)}
              label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-6 py-3 rounded-full bg-red-800 text-white text-lg hover:bg-gradient-to-l transition-all"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
