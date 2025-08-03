import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
    <section className="py-16 px-4 min-h-[60vh] ">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="text-red-700">Your Questions</span> Answered
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded- border-2 transition-all duration-300 
                ${openIndex === idx 
                  ? "border-red-500 bg-white shadow-lg" 
                  : " hover:border-red-500 hover:shadow-md"
                }`}
            >
              <button
                className="flex w-full items-center gap-3 px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-item-${idx}`}
              >
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold 
                  ${openIndex === idx ? "bg-red-600 text-white" : ""}
                `}>
                  {idx + 1}
                </span>
                <span className="flex-1 text-lg md:text-xl font-medium text-gray-800">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-6 h-6 ml-2 transition-transform duration-300 
                    ${openIndex === idx ? "text-red-500 rotate-180" : "text-blue-500"}
                  `}
                />
              </button>
              <div
                id={`faq-item-${idx}`}
                className={`px-6 pt-0 pb-5 text-gray-600 text-base transition-all duration-300 
                  ${openIndex === idx 
                    ? "max-h-60 opacity-100" 
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
