import React from "react";
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[15%] bg-amber-300 h-screen">
      <div className="flex flex-col gap-3 items-center pt-16">
        <button
          className="bg-blue-600 text-white w-40 py-3 rounded-md"
          onClick={() => navigate("/users/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="bg-blue-600 text-white w-40 py-3 rounded-md"
          onClick={() => navigate("/users/products")}
        >
          All Products
        </button>
        <button
          className="bg-blue-600 text-white w-40 py-3 rounded-md"
          onClick={() => navigate("/users/orders")}
        >
          Orders
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
