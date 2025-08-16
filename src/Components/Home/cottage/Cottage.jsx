import {
  GlobeAltIcon,
  TruckIcon,
  HomeModernIcon,
  WifiIcon,
  ShoppingCartIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

const CombinedSection = () => (
  <div className="container mx-auto max-w-6xl px-4 mb-4">
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* LEFT SIDE: Cottage Facilities */}
      <div className="flex-1 flex flex-col justify-center p-6">
        <h2 className="text-4xl font-bold mb-6 text-center lg:text-center pt-6 text-gray-900">
          Villa's <em className="text-red-800 not-italic">Facilities</em>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <GlobeAltIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">Travel Desk</p>
          </div>
          <div className="flex flex-col items-center">
            <TruckIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">Parking Space</p>
          </div>
          <div className="flex flex-col items-center">
            <HomeModernIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">Room Service</p>
          </div>
          <div className="flex flex-col items-center">
            <SunIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">Hot and Cold Water</p>
          </div>
          <div className="flex flex-col items-center">
            <WifiIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">WiFi Internet</p>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingCartIcon className="w-16 h-16 mb-2 text-red-700 hover:text-red-800 transition-all duration-300" />
            <p className="text-lg text-center font-medium text-gray-700">All Meals</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Climate and Dress Advisory */}
     

    </div>
  </div>
);

export default CombinedSection;
