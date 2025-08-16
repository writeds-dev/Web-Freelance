import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  { question: "What is the story behind your hotel?",
    answer: "Our hotel was founded in 1982 with the vision to create a luxurious retreat where guests could experience warmth, comfort, and exceptional hospitality." },
  { question: "What makes your hotel unique?",
    answer: "We combine timeless elegance with modern amenities, plus curated local experiences and heartfelt service from our dedicated team." },
  { question: "What is your mission and vision?",
    answer: "Mission: exceed expectations in service, quality, and hospitality. Vision: be the hotel of choice for memorable, extraordinary stays." },
  { question: "What values guide your hospitality?",
    answer: "Integrity, respect, attention to detail, and a relentless focus on guest satisfaction guide everything we do." },
  { question: "How do you ensure guest satisfaction?",
    answer: "We listen, improve continuously, and tailor amenities to every traveler. Our team anticipates needs and responds promptly." },
  { question: "How can I contact your team?",
    answer: "Reach us anytime via phone, email, or the contact form on our website. We’re here before, during, and after your stay." },
];

export default function AboutUsFAQ() {
  const [open, setOpen] = useState(0); // <-- simple JS, no generic

  return (
    <section className="py-14 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-red-700">About Our Hotel</span> – FAQs
          </h2>
          <p className="mt-3 text-gray-600">
            Quick answers to the most common questions about our story and service.
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
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                    isOpen ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}>
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
          <a href="/book" className="text-red-700 font-medium hover:underline">
            Contact our team
          </a>
          .
        </div>
      </div>
    </section>
  );
}
