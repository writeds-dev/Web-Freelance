import React from "react";
import ContactForm from "../ValidationForm/FormWrapper";


const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="flex items-center bg-blue-500 text-white p-6 rounded shadow">
            <span className="mr-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5" fill="white"/>
              </svg>
            </span>
            <span>
              445 Mount Eden Road, Mt Edenward<br />
              land
            </span>
          </div>
          {/* Phone */}
          <div className="flex items-center bg-red-800 text-white p-6 rounded shadow">
            <span className="mr-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.05 19.05 0 0 1-8.36-2.79 18.49 18.49 0 0 1-5.52-5.52A19.05 19.05 0 0 1 2 3.09 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .76l1.1 4.43a1 1 0 0 1-.27 1L6.91 10.09a16 16 0 0 0 7 7l1.91-2.91a1 1 0 0 1 1-.27l4.43 1.1a1 1 0 0 1 .76 1V16.92z"/>
              </svg>
            </span>
            <span>
              977-444-666-888<br />
              977-444-222-000
            </span>
          </div>
          {/* Email */}
          <div className="flex items-center bg-blue-500 text-white p-6 rounded shadow">
            <span className="mr-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="4" stroke="#fff" fill="none" />
                <path d="M22 6L12 13 2 6" stroke="#fff" />
              </svg>
            </span>
            <span>
              info@Gautama.com.np<br />
              help@Gautama.com.np
            </span>
          </div>
        </div>

        {/* Support Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <div>
            <h3 className="text-lg font-bold mb-2">CUSTOMER SUPPORT</h3>
            <p className="text-gray-600">Our staff is here to help with any questions or requests. Enjoy personalized assistance anytime.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">TECHNICAL SUPPORT</h3>
            <p className="text-gray-600">Need help with booking or our website? Our technical team will make your experience seamless.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">BOOKING QUERIES</h3>
            <p className="text-gray-600">For group bookings or special requests, our reservation experts are ready to assist you.</p>
          </div>
        </div>

        {/* Map & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 min-h-[400px]">
          {/* Google Map */}
          <div className="bg-white rounded shadow overflow-hidden flex h-[400px] md:h-full">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps?q=Shimla&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ minHeight: 400 }}
            ></iframe>
          </div>
          {/* Contact Form */}
          <div className="flex flex-col h-[400px] md:h-full bg-blue-50 rounded shadow p-6 md:p-10">
           
            <div className="flex-1 flex flex-col">
              <ContactForm />
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
