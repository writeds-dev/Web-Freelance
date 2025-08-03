const Works = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
      
      {/* Step Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Step 1 */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">INQUIRE</h3>
            <p className="text-6xl text-gray-800 font-bold">1</p>
            <p className="text-sm text-gray-500 mt-4">Start by asking questions and getting the information you need.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex justify-center items-center">
          <div className="bg-blue-500 text-white p-8 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600">
            <h3 className="text-2xl font-semibold mb-4">GUIDED TOUR</h3>
            <p className="text-6xl font-bold">2</p>
            <p className="text-sm mt-4">Take a guided tour to explore the property and amenities.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">APPLICATION</h3>
            <p className="text-6xl text-gray-800 font-bold">3</p>
            <p className="text-sm text-gray-500 mt-4">Fill out your application to get started with the process.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex justify-center items-center">
          <div className="bg-blue-500 text-white p-8 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600">
            <h3 className="text-2xl font-semibold mb-4">ORIENTATION</h3>
            <p className="text-6xl font-bold">4</p>
            <p className="text-sm mt-4">Complete your orientation and finalize your stay.</p>
          </div>
        </div>
        
      </div>

      {/* Bottom Description */}
      <p className="text-center text-gray-600 mt-8 text-lg sm:text-xl">
        Detailed information about each property, including photos, amenities, and rental terms, can be found here.
      </p>
    </div>
  );
};

export default Works;
