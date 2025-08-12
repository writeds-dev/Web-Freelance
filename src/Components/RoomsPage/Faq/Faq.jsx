import { useState } from "react";
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 min-h-[60vh] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="text-red-600">Your Questions</span> Answered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => ( <div
              key={idx}
              className={`rounded-lg border-2 p-1 transition-all duration-300 ease-in-out ${
                openIndex === idx
                  ? "border-red-600 bg-white shadow-lg"
                  : "border-gray-300 hover:border-red-600 hover:shadow-md"
              }`}
            >
              <button
                className="flex w-full items-center gap-4 px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-item-${idx}`}
              >
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white bg-red-600`}
                >
                  {idx + 1}
                </span>
                <span className="flex-1 text-lg md:text-xl font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-6 h-6 ml-2 transition-transform duration-300 group-hover:text-red-600 ${
                    openIndex === idx ? "rotate-180 text-red-600" : "text-gray-500"
                  }`}
                />
              </button>
              <div
                id={`faq-item-${idx}`}
                className={`px-6 pt-0 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
