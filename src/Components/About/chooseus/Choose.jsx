import { Utensils, BarChart2 } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Trusted Hospitality',
    description: 'A reputation built on genuine care, consistency, and warm welcomes.',
  },
  {
    number: '02',
    title: 'Effortless Stays',
    description: 'Seamless booking, express check-in, and attentive guest support from day one.',
  },
  {
    number: '03',
    title: 'Unmatched Comfort',
    description: 'Thoughtfully designed rooms and suites with all modern amenities.',
  },
  {
    number: '04',
    title: 'Personalized Experiences',
    description: 'Tailored local tours, experiences, and recommendations for every guest.',
  },
];

export default function WhyBookWithUs() {
  return (
    <section id='story'>
      <div className="max-w-7xl bg-white mx-auto p-4 sm:p-8">
        <h2 className="text-3xl lg:text-5xl font-bold  text-center text-black ">
          Why Book With <span className="text-red-800">Our Hotel?</span>
        </h2>
        <p className="mt-6 text-lg text-gray-900 text-center mx-auto max-w-3xl">
          Discover a new standard in hospitality. Whether you travel for business, leisure, or family time, our team ensures your stay is comfortable, memorable, and uniquely yours. 
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Left Section */}
          <div className="flex flex-col justify-start items-stretch space-y-6">
            <ul className="space-y-6">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 group hover:scale-105 transform transition-all duration-300 ease-in-out"
                >
                  <div className="w-16 h-16 bg-red-800 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-xl font-semibold">{item.number}</span>
                  </div>
                  <div className="flex-1 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                    <span className="text-xl font-semibold text-gray-800 group-hover:text-red-800">{item.title}</span>
                    <p className="text-gray-900 mt-2 group-hover:text-gray-800">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <img
              src="/add/add-5.JPG"
              alt="Elegant hotel lobby"
              className="w-full mt-6 shadow-md"
              style={{ maxHeight: 280, objectFit: 'cover' }}
            />
          </div>

          {/* Right Section (Image and Highlights) */}
          <div className="flex flex-col justify-start items-stretch">
            <div className="relative">
              <img
                src="/P/p-6.webp"
                alt="Modern hotel suite"
                className="w-full h-auto object-cover shadow-lg"
                style={{ maxHeight: 350, objectFit: 'cover' }}
              />
              <div className="bottom-4 left-4 right-4 mt-5 bg-white/90 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                  {/* Card 1: Fine Dining */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <Utensils className="w-8 h-8 text-[#f17067]" />
                      <h3 className="text-xl font-semibold text-gray-800">Exceptional Dining</h3>
                    </div>
                    <p className="text-gray-900">
                      Experience gourmet cuisine, local flavors, and attentive service in every meal.
                    </p>
                  </div>
                  {/* Card 2: Proven Quality */}
                  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <BarChart2 className="w-8 h-8 text-[#159bc2]" />
                      <h3 className="text-xl font-semibold text-gray-800">Proven Excellence</h3>
                    </div>
                    <p className="text-gray-900">
                      Consistent five-star reviews and guest loyalty—your satisfaction, our tradition.
                    </p>
                  </div>
                </div>

                <div className="py-6">
                  <h3 className="text-gray-900">
                    Every stay with us is more than a booking—it's an invitation to relax, explore, and feel truly welcomed. From stunning rooms to signature cuisine and warm, personal service, our hotel is your new favorite address.
                    <blockquote className="relative  p-8 text-black text-lg sm:text-xl md:text-xl italic font-thin rounded-lg shadow-lg mx-auto max-w-3xl my-10">
                      <div className="absolute inset-0 bg-opacity-15 bg-gray-800 rounded-lg"></div>
                      <p className="relative z-10">
                        "Stay with us and discover the difference that true hospitality can make."
                      </p>
                      <footer className="relative z-10 mt-6 text-sm text-right">
                        <cite>- Our Hotel Team</cite>
                      </footer>
                    </blockquote>
                  </h3>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
