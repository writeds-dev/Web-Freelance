import { useState } from "react";

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hpbWxhfGVufDB8fDB8fHww",
    text: `"Our stay at Grand View Resort was simply unforgettable. The rooms were immaculate, the view was breathtaking, and the breakfast buffet was a real treat every morning!"`,
    name: "Priya Sharma",
    role: "Family Guest",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1609232530947-0aeb23338a43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpbWxhfGVufDB8fDB8fHww",
    text: `"From the friendly staff to the luxurious spa, everything at Lakeview Hotel made my solo trip so relaxing. Can't wait to return next year!"`,
    name: "John Williams",
    role: "Solo Traveler",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586881141091-1014c7c2cb79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hpbWxhfGVufDB8fDB8fHww",
    text: `"We hosted our anniversary here and it was magical. The candlelight dinner by the pool was a dream come true. Highly recommend for couples!"`,
    name: "Emily & Raj",
    role: "Couple",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1567253523599-6302cfe64fac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D",
    text: `"Fantastic location for our corporate retreat. Meeting spaces were modern, and the catering exceeded expectations. We will definitely book again!"`,
    name: "Meera Verma",
    role: "Event Organizer",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-white relative">
      {/* Avatar */}
      <img
        src={testimonials[current].avatar}
        alt={testimonials[current].name}
        className="w-32 h-32 rounded-full border-4 border-red-400 object-cover mt-8 shadow-lg"
      />

      {/* Testimonial Text */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <p className="text-2xl md:text-3xl text-center italic text-gray-800">
          {testimonials[current].text}
        </p>
      </div>

      {/* Name and Role */}
      <div className="mt-6 flex flex-col items-center">
        <span className="text-2xl font-semibold text-red-600">
          {testimonials[current].name}
        </span>
        <span className="text-gray-500 text-lg italic mt-1">
          {testimonials[current].role}
        </span>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full inline-block transition 
              ${idx === current ? "bg-sky-500 scale-125" : "bg-gray-300"}
            `}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
