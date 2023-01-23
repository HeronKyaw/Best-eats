import React, { useState } from "react";
import { categories, data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);
  // Filter Type: Burger, Pizza, ...
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter By Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter row */}
      <div className="mb-4 flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>

          <div className="flex justify-start gap-2 flex-wrap">
            <button onClick={() => setFoods(data)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={() => filterType('burger')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burger
            </button>
            <button onClick={() => filterType('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={() => filterType('salad')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salad
            </button>
            <button onClick={() => filterType('chicken')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>

          <div className="flex justify-start gap-2 flex-wrap max-w-[390px] w-full">
            <button onClick={() => filterPrice('$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
