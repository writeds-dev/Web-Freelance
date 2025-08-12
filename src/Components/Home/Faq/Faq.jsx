import React, { useState } from 'react';

const faqData = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in is from 2:00 PM, and check-out is by 11:00 AM.',
  },
  {
    question: 'Does The Castle Villa offer airport shuttle service?',
    answer: 'Yes, we offer an airport shuttle service upon request. Please inform us at least 24 hours in advance.',
  },
  {
    question: 'Is breakfast included in the stay?',
    answer: 'Yes, a complimentary breakfast is provided for all guests.',
  },
  {
    question: 'Are pets allowed at The Castle Villa?',
    answer: 'Sorry, pets are not allowed at our property.',
  },
  {
    question: 'Do you have parking facilities?',
    answer: 'Yes, we offer free parking for our guests.',
  },
  {
    question: 'Is there free Wi-Fi at The Castle Villa?',
    answer: 'Yes, free Wi-Fi is available throughout the property.',
  },
  {
    question: 'What kind of food is served at the restaurant?',
    answer: 'We offer a variety of local and continental dishes made with fresh ingredients. Vegetarian and vegan options are available.',
  },
  {
    question: 'Is there a swimming pool at The Castle Villa?',
    answer: 'Yes, we have a beautiful outdoor pool for all our guests to enjoy.',
  },
  {
    question: 'Can I book activities at The Castle Villa?',
    answer: 'Yes, we offer guided nature walks, adventure activities, and other recreational options for our guests.',
  },
  {
    question: 'Is there a spa at The Castle Villa?',
    answer: 'Yes, we have a luxurious spa offering various treatments, including massages, facials, and body scrubs.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Cancellation is free up to 48 hours before your check-in date. After that, a fee may apply.',
  },
  {
    question: 'Can I request a late check-out?',
    answer: 'Late check-out may be available upon request, depending on room availability. Please check with our front desk.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-red-800 rounded mb-4" />
        </div>
      </div>

      {/* FAQ Grid Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqData.map((faq, index) => (
          <div key={index} className="rounded-xl shadow-lg overflow-hidden bg-white">
            <div
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-100 transition-all duration-300"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform duration-300 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-50 p-5 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
