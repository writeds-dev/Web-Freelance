import {
  GlobeAltIcon,
  TruckIcon,
  HomeModernIcon,
  WifiIcon,
  ShoppingCartIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

const CombinedSection = () => (
  <div className="container mx-auto max-w-6xl px-4 py-20">
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* LEFT SIDE: Cottage Facilities */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow">
          <h2 className="text-3xl font-bold mb-6 text-left lg:text-center pt-6">
            Cottage <em className="text-red-800 not-italic">Facilities</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 px-6 pb-6">
            <div className="flex flex-col items-center">
              <GlobeAltIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">Travel Desk</p>
            </div>
            <div className="flex flex-col items-center">
              <TruckIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">Parking Space</p>
            </div>
            <div className="flex flex-col items-center">
              <HomeModernIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">Room Service</p>
            </div>
            <div className="flex flex-col items-center">
              <SunIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">Hot and Cold Water</p>
            </div>
            <div className="flex flex-col items-center">
              <WifiIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">WiFi Internet</p>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingCartIcon className="w-14 h-14 mb-2 text-gray-600" />
              <p className="text-lg text-center">All Meals</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Climate and Dress Advisory */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow w-full">
          <img
            src="https://images.unsplash.com/photo-1521319411283-5132e77195de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xpbWF0ZSUyMHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Climate advisory"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-serif font-semibold mb-4 tracking-wide">
              CLIMATE AND DRESS ADVISORY
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-serif font-medium">Summer (May To Sept)</h3>
              <p className="text-gray-500 mt-1 text-sm">
                Max 20&#176;C / Min 05&#176;C Cotton, Light Woollens
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-serif font-medium">Winter (Oct To April)</h3>
              <p className="text-gray-500 mt-1 text-sm">
                Max 15&#176;C / Min 0&#176;C Woollens To Heavy Woollens/Jacket
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default CombinedSection;
