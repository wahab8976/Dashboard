import React from "react";
import SideNavbar from "../components/SideNavbar";
import { useNavigate } from "react-router-dom";

const products = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Products</h2>
          <button
            onClick={() => navigate("/users/addProducts")}
            className="bg-blue-600 text-white p-3 rounded-xl "
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default products;
