import React from "react";
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[15%] min-h-screen h-auto">
      <div className="flex flex-col gap-5 items-center pt-20">
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
