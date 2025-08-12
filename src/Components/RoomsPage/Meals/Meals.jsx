const Meals = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
        {/* Left Section (Text and Features) */}
        <div className="max-w-xl space-y-6 lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brown-800">
            Quality <span className="text-red-800 font-semibold underline">Food & Drink</span> Your Trip Are Enjoyable
          </h2>
          <p className="text-base lg:text-lg text-gray-500">
            Sed ut perspiciatis unde omnis natus voluptatem accusantium doloremque laudantium, totam rem aperiam inventore.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-brown-800 mr-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg lg:text-xl text-brown-800">Breakfast, Tea & Coffee</h3>
                <p className="text-sm lg:text-base text-gray-500">To take a trivial example, which undertakes laborious ways.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-brown-800 mr-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg lg:text-xl text-brown-800">Quality Foods & Kitchen</h3>
                <p className="text-sm lg:text-base text-gray-500">Sed ut perspiciatis omnis natus voluptatem accusans.</p>
              </div>
            </div>
          </div>

          <button className="mt-6 px-6 py-3 bg-brown-800 text-white font-semibold rounded-lg">
            Learn More Hotel
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-6">
          <img src="/images/a (8).JPG" alt="Hotel Interior" className="w-full h-auto shadow-lg " />
        </div>
      </div>
    </div>
  );
};

export default Meals;
