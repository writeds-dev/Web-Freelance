// Testimonial.jsx
import React, { useState, useCallback } from "react";

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    text:
      "The Castle Villa felt like a boutique hideaway in the hills. Woke up to snow peaks, slept to pine-scented air. Staff went above and beyond—hot chai ready after every chilly evening walk!",
    name: "Aarav Mehta",
    role: "Weekend Getaway",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    text:
      "Perfect base for treks! They arranged a sunrise hike and packed us hearty trail boxes. Came back to a bonfire and local Himachali dinner. Couldn’t ask for more.",
    name: "Neha & Kunal",
    role: "Adventure Couple",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
    text:
      "Spacious rooms, spotless bathrooms, and those balcony views of Manali valley—wow. Kids loved the lawn games while we enjoyed quiet coffee on the deck.",
    name: "Priya Sharma",
    role: "Family Guest",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60",
    text:
      "Reliable Wi-Fi, peaceful workspace, and room service right on time. I logged calls all day and hit Old Manali by evening. Great pick for remote workers.",
    name: "John Williams",
    role: "Remote Professional",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&auto=format&fit=crop&q=60",
    text:
      "We celebrated our anniversary here—private candlelight dinner and rose décor done tastefully. The team captured photos against the mountain backdrop. Truly memorable.",
    name: "Ritika & Raj",
    role: "Celebration Stay",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    text:
      "Booked Castle Villa for a small offsite. Meeting area was set up early, coffee kept flowing, and airport transfers were smooth. Everyone loved the bonfire night.",
    name: "Meera Verma",
    role: "Corporate Retreat Lead",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&auto=format&fit=crop&q=60",
    text:
      "Photographer’s dream—golden light over the Pir Panjal right from the balcony. Staff tipped me off to a secret viewpoint nearby. Got my best shots of the trip.",
    name: "Kabir Singh",
    role: "Travel Photographer",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
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
      className="flex flex-col items-center justify-center min-h-[60vh] bg-white relative px-4"
      onKeyDown={handleKey}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      {/* Avatar */}
      <img
        src={testimonials[current].avatar}
        alt={`${testimonials[current].name} avatar`}
        className="w-32 h-32 rounded-full border-4 border-red-400 object-cover mt-8 shadow-lg"
        loading="lazy"
      />

      {/* Text */}
      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-2xl md:text-3xl text-center italic text-gray-800">
          “{testimonials[current].text}”
        </p>
      </div>

      {/* Name & Role */}
      <div className="mt-6 flex flex-col items-center">
        <span className="text-2xl font-semibold text-red-600">
          {testimonials[current].name}
        </span>
        <span className="text-gray-500 text-lg italic mt-1">
          {testimonials[current].role}
        </span>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
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
          className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
