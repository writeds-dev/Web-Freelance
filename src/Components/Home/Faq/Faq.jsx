import React, { useState } from "react";

const faqData = [
  { question: "What are the check-in and check-out times?", answer: "Check-in is from 2:00 PM, and check-out is by 11:00 AM." },
  { question: "Does The Castle Villa offer airport shuttle service?", answer: "Yes, we offer an airport shuttle service upon request. Please inform us at least 24 hours in advance." },
  { question: "Is breakfast included in the stay?", answer: "Yes, a complimentary breakfast is provided for all guests." },
  { question: "Are pets allowed at The Castle Villa?", answer: "Sorry, pets are not allowed at our property." },
  { question: "Do you have parking facilities?", answer: "Yes, we offer free parking for our guests." },
  { question: "Is there free Wi-Fi at The Castle Villa?", answer: "Yes, free Wi-Fi is available throughout the property." },
  { question: "What kind of food is served at the restaurant?", answer: "We offer a variety of local and continental dishes made with fresh ingredients. Vegetarian and vegan options are available." },
  { question: "Is there a swimming pool at The Castle Villa?", answer: "Yes, we have a beautiful outdoor pool for all our guests to enjoy." },
  { question: "Can I book activities at The Castle Villa?", answer: "Yes, we offer guided nature walks, adventure activities, and other recreational options for our guests." },
  { question: "Is there a spa at The Castle Villa?", answer: "Yes, we have a luxurious spa offering various treatments, including massages, facials, and body scrubs." },
  { question: "What is the cancellation policy?", answer: "Cancellation is free up to 48 hours before your check-in date. After that, a fee may apply." },
  { question: "Can I request a late check-out?", answer: "Late check-out may be available upon request, depending on room availability. Please check with our front desk." },
];

export default function FAQAlt() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked <span className="text-red-700">Questions</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know about staying at The Castle Villa.
          </p>
        </div>

        {/* List */}
        <ul role="list" className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden">
          {faqData.map((item, idx) => {
            const isOpen = open === idx;
            const contentId = `faq-alt-content-${idx}`;
            const buttonId = `faq-alt-button-${idx}`;

            return (
              <li key={idx} className="group">
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start gap-4 px-5 py-5 text-left hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
                >
                  {/* Number badge */}
                  <span
                    className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold
                      ${isOpen ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>

                      {/* Plus / minus icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-red-700" : "text-gray-500"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="mt-3 text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Helper note */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Still have questions?{" "}
          <a href="/book" className="text-red-700 font-medium hover:underline">
            Contact our team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
