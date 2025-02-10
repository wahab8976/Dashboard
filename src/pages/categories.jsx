import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import Spinner from "../components/Spinner";
import CategoriesTable from "../components/CategoriesTable";

const Products = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description:
        "Devices and gadgets including smartphones, laptops, and tablets.",
    },
    {
      id: 2,
      name: "Fashion",
      description:
        "Clothing, accessories, and footwear for men, women, and kids.",
    },
    {
      id: 3,
      name: "Home & Kitchen",
      description: "Furniture, appliances, and home decor items.",
    },
    {
      id: 4,
      name: "Books",
      description: "Fiction, non-fiction, and educational books for all ages.",
    },
    {
      id: 5,
      name: "Health & Beauty",
      description: "Skincare, haircare, and wellness products.",
    },
    {
      id: 6,
      name: "Sports & Outdoors",
      description: "Fitness equipment and outdoor adventure gear.",
    },
    {
      id: 7,
      name: "Toys & Games",
      description: "Educational toys, board games, and puzzles for kids.",
    },
    {
      id: 8,
      name: "Automotive",
      description: "Car accessories, tools, and spare parts.",
    },
    {
      id: 9,
      name: "Groceries",
      description: "Everyday essentials, packaged foods, and beverages.",
    },
  ];

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Product Categories</h2>
          <button
            onClick={() => navigate("/users/addCategory")}
            className="bg-blue-600 text-white p-3 rounded-xl"
          >
            Add Category
          </button>
        </div>
        <div className="bg-gray-200 mr-4 rounded-2xl p-4">
          <CategoriesTable />
        </div>
      </div>
    </div>
  );
};

export default Products;
