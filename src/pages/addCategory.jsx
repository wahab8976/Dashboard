import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SideNavbar from "../components/SideNavbar";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const sendData = async (data) => {
    try {
      const payload = {
        name: data.categoryName,
        description: data.categoryDescription,
      };

      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
      } else {
        setSuccessMessage("Category added successfully!");
        reset(); // Reset the form after success
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  const onSubmit = (data) => {
    setSuccessMessage("");
    sendData(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar className="w-[15%]" />
      <div className="w-[100vw] flex min-h-screen bg-gray-100 justify-center items-center">
        <section className="rounded-xl bg-white shadow-md p-8 w-1/3">
          <h2 className="text-2xl font-serif mb-6">Add a New Category</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Category Name */}
            <label className="block text-lg">
              Category Name
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Electronics"
                {...register("categoryName", {
                  required: "Category name is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                })}
              />
              {errors.categoryName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.categoryName.message}
                </p>
              )}
            </label>

            {/* Category Description */}
            <label className="block text-lg mt-4">
              Category Description
              <textarea
                className="mt-2 p-2 w-full h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the category here..."
                {...register("categoryDescription", {
                  maxLength: { value: 500, message: "Maximum length is 500" },
                })}
              />
              {errors.categoryDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.categoryDescription.message}
                </p>
              )}
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Category
            </button>
          </form>

          {successMessage && (
            <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AddCategory;
