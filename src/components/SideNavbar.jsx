import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-[15%] min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 shadow-lg">
      <div className="flex flex-col gap-5 items-center pt-16">
        <h1 className="text-white text-2xl font-bold mb-10">Admin Panel</h1>

        {/* Dashboard Button */}
        <button
          className={`w-40 py-3 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${
            isActive("/users/dashboard")
              ? "bg-indigo-700 scale-105 text-white"
              : "bg-blue-600 hover:scale-105 hover:bg-indigo-500"
          }`}
          onClick={() => navigate("/users/dashboard")}
        >
          Dashboard
        </button>

        {/* All Products Button */}
        <button
          className={`w-40 py-3 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${
            isActive("/users/products")
              ? "bg-indigo-700 scale-105 text-white"
              : "bg-blue-600 hover:scale-105 hover:bg-indigo-500"
          }`}
          onClick={() => navigate("/users/products")}
        >
          All Products
        </button>

        {/* All Categories Button */}
        <button
          className={`w-40 py-3 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${
            isActive("/users/categories")
              ? "bg-indigo-700 scale-105 text-white"
              : "bg-blue-600 hover:scale-105 hover:bg-indigo-500"
          }`}
          onClick={() => navigate("/users/categories")}
        >
          All Categories
        </button>

        {/* Orders Button */}
        <button
          className={`w-40 py-3 rounded-md shadow-md transform transition-all duration-300 ease-in-out ${
            isActive("/users/orders")
              ? "bg-indigo-700 scale-105 text-white"
              : "bg-blue-600 hover:scale-105 hover:bg-indigo-500"
          }`}
          onClick={() => navigate("/users/orders")}
        >
          Orders
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
