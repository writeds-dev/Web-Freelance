import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is the story behind your hotel?",
    answer:
      "Our hotel was founded in 1982 with the vision to create a luxurious retreat where guests could experience warmth, comfort, and exceptional hospitality. Over the decades, we have grown into a leading destination known for personalized service and elegant surroundings.",
  },
  {
    question: "What makes your hotel unique?",
    answer:
      "We combine timeless elegance with modern amenities, offering guests not only comfort but also unique local experiences, curated activities, and heartfelt service from our dedicated team.",
  },
  {
    question: "What is your mission and vision?",
    answer:
      "Our mission is to provide an unforgettable stay by exceeding expectations in service, quality, and hospitality. Our vision is to be recognized as the hotel of choice for guests seeking an extraordinary and memorable experience.",
  },
  {
    question: "What values guide your hospitality?",
    answer:
      "We believe in integrity, respect, attention to detail, and a relentless focus on guest satisfaction. These values drive every aspect of our service.",
  },
  {
    question: "How do you ensure guest satisfaction?",
    answer:
      "We listen to our guests, continually improve our services, and offer a range of amenities to suit every traveler. Our staff is trained to anticipate needs and respond promptly to all requests.",
  },
  {
    question: "How can I contact your management or guest relations team?",
    answer:
      "You can reach our management and guest relations team at any time via phone, email, or the contact form on our website. We are always here to assist you before, during, and after your stay.",
  },
];

const AboutUsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 min-h-[60vh] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="text-red-700">About Our Hotel</span> – Frequently Asked Questions
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-lg border-2 transition-all duration-300 
                ${openIndex === idx 
                  ? "border-red-500 bg-white shadow-lg" 
                  : "hover:border-red-500 hover:shadow-md"
                }`}
            >
              <button
                className="flex w-full items-center gap-3 px-6 py-5 text-left group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-item-${idx}`}
              >
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold 
                  ${openIndex === idx ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}
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

export default AboutUsFAQ;
