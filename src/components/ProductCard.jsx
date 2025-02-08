import React from "react";
import image from "../assets/react.svg";
import OverFlowBadge from "./OverFlowBadge";
import { useState } from "react";

function ProductCard({
  name,
  brand,
  sold,
  category,
  description,
  salePrice,
  regularPrice,
  stock,
  productDBId,
}) {
  const remainingStock = stock - sold;

  // Redirect handler for product details

  // Discount Calculation
  const discountPercentage =
    salePrice && regularPrice
      ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
      : 0;

  const [overFlowBadge, setOverFlowBadge] = useState(false);

  return (
    <div className="max-w-sm mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">
      <div className="flex items-start justify-between">
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="bg-green-400 w-20 h-20 rounded-md"
        />
        {/* Overflow Menu Button */}

        {!overFlowBadge && (
          <button
            onClick={() => setOverFlowBadge(true)}
            className="cursor-pointer text-gray-400 hover:text-gray-600"
          >
            ⋮
          </button>
        )}

        {overFlowBadge && (
          <OverFlowBadge
            itemName={name}
            productDBId={productDBId}
            overFlowBadge={OverFlowBadge}
            setOverFlowBadge={setOverFlowBadge}
          />
        )}
      </div>

      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>

      {/* Pricing Section */}
      <div className="mt-2 flex items-center gap-2">
        {salePrice && regularPrice && salePrice !== regularPrice ? (
          <>
            <p className="text-lg font-bold text-orange-500">Rs {salePrice}</p>
            <p className="text-sm text-gray-500 line-through">
              Rs {regularPrice}
            </p>
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {discountPercentage}% OFF
            </span>
          </>
        ) : (
          <p className="text-lg font-bold mt-2">
            Rs {salePrice ? salePrice : regularPrice}
          </p>
        )}
      </div>

      {/* Summary Section */}
      <div className="mt-4">
        <h3 className="text-base font-medium">Summary</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Sales & Remaining Products */}
      <div className="bg-gray-100 p-4 mt-4 rounded-md">
        <div className="flex justify-between mb-2">
          <span>Sales</span>
          <span className="text-green-600 font-medium">{sold}↑</span>
        </div>
        <div className="flex justify-between">
          <span>Remaining Products</span>
          <span>{remainingStock >= 0 ? remainingStock : 0}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 h-2 mt-2 rounded-md">
          <div
            className="bg-orange-400 h-2 rounded-md"
            style={{
              width: `${(sold / stock) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
