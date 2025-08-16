import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in starts at 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes, a complimentary breakfast buffet is included with every booking, served daily from 7:00 to 11:00 AM in our dining hall.",
  },
  {
    question: "Do you provide airport shuttle service?",
    answer:
      "We offer airport pick-up and drop-off at an additional cost. Please contact our front desk at least 24 hours prior to arrival.",
  },
  {
    question: "Is there free Wi-Fi in the hotel?",
    answer:
      "Absolutely! High-speed Wi-Fi is available throughout the hotel premises at no extra charge.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Unfortunately, pets are not permitted in our hotel to ensure the comfort and safety of all guests.",
  },
  {
    question: "What amenities are available?",
    answer:
      "Our guests enjoy access to the pool, spa, fitness center, in-room service, travel desk, and more. Please see the facilities section for full details.",
  },
];

export default function FAQ() {
  // JSX version: no generics
  const [open, setOpen] = useState(0); // start with the first item open; use null for none

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-red-700">Your Questions</span> Answered
          </h2>
          <p className="mt-3 text-gray-600">
            Quick answers to the most common questions about your stay.
          </p>
        </header>

        <ul className="space-y-3" role="list">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            const contentId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <li key={idx} className="bg-white rounded-xl border border-gray-200">
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 text-left px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-xl"
                >
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                      isOpen ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {idx + 1}
                  </span>

                  <span className="flex-1 font-medium text-gray-900">{item.question}</span>

                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-600" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-5 pt-0 overflow-hidden transition-[grid-template-rows] duration-300 ease-out grid ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  } motion-reduce:transition-none`}
                >
                  <div className="min-h-0">
                    <p className="pb-4 text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 text-center text-sm text-gray-600">
          Still curious?{" "}
          <a href="/contact" className="text-red-700 font-medium hover:underline">
            Contact our team
          </a>
          .
        </div>
      </div>
    </section>
  );
}
