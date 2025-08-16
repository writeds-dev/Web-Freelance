import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wifi,
  Car,
  Coffee,
  BedDouble,
  Tv,
  Snowflake,
  ShowerHead,
  Utensils,
  ConciergeBell,
  ParkingCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const superDeluxeImages = [
  "/images/a (15).JPG",
  "/images/a (12).JPG",
  "/images/a (11).JPG",
  "/images/a (13).JPG",
  "/images/a (21).JPG",
  "/images/a (17).JPG",
];

const amenities = [
  { label: "Wi-Fi", icon: <Wifi size={20} /> },
  { label: "Air Conditioning", icon: <Snowflake size={20} /> },
  { label: "Smart TV", icon: <Tv size={20} /> },
  { label: "Breakfast", icon: <Coffee size={20} /> },
  { label: "In-Room Dining", icon: <Utensils size={20} /> },
  { label: "Room Service", icon: <ConciergeBell size={20} /> },
  { label: "Parking", icon: <ParkingCircle size={20} /> },
  { label: "Airport Pickup", icon: <Car size={20} /> },
  { label: "Hot Shower", icon: <ShowerHead size={20} /> },
];

export default function RoomDetails() {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((p) => (p - 1 + superDeluxeImages.length) % superDeluxeImages.length);
  const next = () => setIdx((p) => (p + 1) % superDeluxeImages.length);
  const goTo = (i) => setIdx(i);

  const handleSubmit = () => navigate("/book");

  return (
    <div className="container mx-auto max-w-6xl py-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image slider */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-72 sm:h-96">
            <img
              src={superDeluxeImages[idx]}
              alt={`Super Deluxe Room photo ${idx + 1}`}
              className="h-full w-full object-cover"
            />

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {superDeluxeImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-white shadow" : "w-2.5 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Details + Amenities */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <div className="p-8 flex-1 flex flex-col">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-left">
              Super Deluxe Room
            </h2>
            <p className="text-gray-600 mb-6">
              Experience the luxurious and spacious Super Deluxe Room for ultimate comfort.
            </p>

            {/* Amenities icons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Amenities</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amenities.map((a) => (
                  <li
                    key={a.label}
                    className="flex items-center gap-2 text-gray-700"
                    title={a.label}
                  >
                    <span className="text-blue-600">{a.icon}</span>
                    <span className="text-sm">{a.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Enquire
              </button>
            </div>
          </div>

          {/* Small footer strip */}
          <div className="px-8 py-4 bg-gray-50 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <BedDouble size={18} />
              <span>Ideal for 2 guests · Extra bed on request</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
