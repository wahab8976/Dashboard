import React from "react";
import image from "../assets/react.svg";

function ProductCard({name,brand,category,description,price,stock}) {
  return (
    <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">
      <div className="flex items-start justify-between">
        {/* Product Image */}
        <img
          src={image}
          alt="Battery"
          className="w-20 h-20 rounded-md"
        />
        {/* Overflow Menu Button */}
        <button className="text-gray-400 hover:text-gray-600">
          ⋮
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-lg font-bold mt-2">Rs {price}</p>

      {/* Summary Section */}
      <div className="mt-4">
        <h3 className="text-base font-medium">Summary</h3>
        <p className="text-sm text-gray-500">{description}
        </p>
      </div>

      {/* Sales & Remaining Products */}
      <div className="bg-gray-100 p-4 mt-4 rounded-md">
        <div className="flex justify-between mb-2">
          <span>Sales</span>
          <span className="text-green-600 font-medium">1269 ↑</span>
        </div>
        <div className="flex justify-between">
          <span>Remaining Products</span>
          <span>1269</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-2 mt-2 rounded-md">
          <div className="bg-orange-400 h-2 rounded-md" style={{ width: "70%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
