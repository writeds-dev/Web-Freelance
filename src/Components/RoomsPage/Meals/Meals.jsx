// src/components/MealsSection.jsx

const meals = [
  {
    name: "Breakfast",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    time: "7:00 – 11:00 am",
    desc: "Enjoy a fresh continental breakfast with local specialties and hot coffee.",
  },
  {
    name: "Lunch",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    time: "12:00 – 2:00 pm",
    desc: "Savor a delightful lunch with a selection of local and international cuisines.",
  },
  {
    name: "Dinner",
    img: "https://images.unsplash.com/photo-1562050344-f7ad946cee35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
    time: "6:30 – 10:00 pm (last call)",
    desc: "Indulge in a cozy dinner experience with chef’s specials served daily.",
  },
];

const MealsSection = () => (
  <section className="bg-white py-5 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 tracking-tight">
        <span className="text-red-700">Meals</span> & Timings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.name}
            className=" shadow-lg bg-gray-50 hover:shadow-2xl transition p-0 flex flex-col overflow-hidden"
          >
            <div className="relative">
              <img
                src={meal.img}
                alt={meal.name}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-4 right-4 bg-red-700 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                {meal.time}
              </span>
            </div>
            <div className="p-6 flex flex-col items-center flex-1">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{meal.name}</h3>
              <p className="text-gray-600 text-center mb-4">{meal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MealsSection;
