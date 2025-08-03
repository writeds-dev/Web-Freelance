import React from "react";

const features = [
  {
    icon: "/Svg/3.svg",
    title: "Exclusive Trip",
    description: "We offer customized and exclusive trips to ensure the best experience for our travelers.",
  },
  {
    icon: "/Svg/2.svg",
    title: "Safety First Always",
    description: "Your safety is our priority. We ensure that every journey is well-planned and secure.",
  },
  {
    icon: "/Svg/1.svg",
    title: "Professional Guide",
    description: "Our experienced and knowledgeable guides ensure an unforgettable experience throughout your journey.",
  },
];

const About1 = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24 px-4"
      style={{
        backgroundImage: "url(/assets/img/about/about-bg.jpg)",
      }}
    >
      <div id="explore" className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/80 to-white/90 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14 md:gap-20">
          {/* Left: Image & About */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                alt="Resort in the hills"
                className="rounded-xl shadow-xl w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-8 bg-white bg-opacity-80 rounded-lg p-6 md:p-8 shadow-lg max-w-xl text-center lg:text-left">
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                <span className="font-semibold text-red-700">The Castle Resort at Fagu</span> in Shimla Hills, H.P is nestled in the lap of nature. The name "Fagu" is derived from the word "fog", as it is often covered in fog, especially during the rainy season. Surrounded by apple orchards, it provides a surreal and romantic atmosphere at an altitude of 8000 ft. The resort has 42 well-appointed and comfortable cottage rooms, each named after the districts of Himachal Pradesh.
              </p>
            </div>
          </div>

          {/* Right: Title & Features */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left mb-8">
              <span className="uppercase tracking-widest font-semibold text-lg text-blue-800">Let’s Go Together</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Great <em className="text-red-700 italic font-serif">opportunity</em> for <br /> adventure & travels
              </h2>
            </div>
            <div className="flex flex-col gap-6 w-full">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 bg-white/70 hover:bg-blue-50 rounded-xl p-5 md:p-6 transition-all duration-200 shadow group"
                >
                  <span className="shrink-0 flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full shadow-sm group-hover:bg-blue-200 transition">
                    <img src={f.icon} alt={f.title} className="w-8 h-8" />
                  </span>
                  <div>
                    <h5 className="font-bold text-lg md:text-xl text-gray-800 mb-1">{f.title}</h5>
                    <p className="text-gray-600 text-base md:text-lg">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
