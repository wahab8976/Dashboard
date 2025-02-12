import React, { useState, useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import Tags from "../components/Tags";
import { useForm } from "react-hook-form";
import SelectDropDown from "../components/SelectDropDown";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const [tagName, setTagName] = useState("");
  const [tagsList, setTagsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const onTextAreaChange = (e) => {
    const value = e.target.value;
    setTagName(value);

    if (value.includes("\n")) {
      const newTag = value.trim();
      if (newTag && !tagsList.includes(newTag)) {
        setTagsList((prevTagsList) => [...prevTagsList, newTag]);
        setTagName("");
      }
    }
  };

  const removeTag = (tag) => {
    setTagsList((prevTagsList) => prevTagsList.filter((t) => t !== tag));
  };

  useEffect(() => {
    console.log(`Taglist is ${tagsList}`);
  }, [tagsList]);

  const sendData = async (data) => {
    try {
      const payload = {
        ...data,
        name: data.productName,
        description: data.productDescription,
        category: data.category,
        brand: data.brandName,
        sku: data.sku,
        stock: data.stockQuantity,
        price: data.regularPrice,
        salePrice: data.salePrice,
        tags: tagsList,
      };

      const response = await fetch("http://localhost:5000/api/products", {
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
        console.log("Product added successfully");
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Tags:", tagsList);
    sendData(data);
    reset();
    setTagsList([]); // Clear the tags
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar className="w-[15%]" />

      <div className="flex w-full p-5">
        <section className="rounded-xl bg-white shadow-md p-6 w-3/5">
          <h2 className="text-2xl font-serif mb-4">Add a New Product</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Product Name */}
            <label className="block text-lg mt-4">
              Product Name
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Snickers"
                {...register("productName", {
                  required: "Product name is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                  maxLength: { value: 50, message: "Maximum length is 50" },
                })}
              />
              {errors.productName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productName.message}
                </p>
              )}
            </label>

            {/* Product Description */}
            <label className="block text-lg mt-4">
              Product Description
              <textarea
                className="mt-2 p-2 w-full h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product description here"
                {...register("productDescription", {
                  required: "Product description is required",
                  maxLength: { value: 500, message: "Maximum length is 500" },
                })}
              />
              {errors.productDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productDescription.message}
                </p>
              )}
            </label>

            {/* Category */}

            <SelectDropDown
              setSelectedCategory={setSelectedCategory}
              onOpenChange={(isOpen) => isOpen && handleFetchAllCategories()}
            />

            {/* <label className="block text-lg mt-4">
              Category
              <input
                onFocus={handleFetchCategories}
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Chocolate"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </label> */}

            {/* Brand Name */}
            <label className="block text-lg mt-4">
              Brand Name
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                {...register("brandName", {
                  required: "Brand name is required",
                })}
              />
              {errors.brandName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.brandName.message}
                </p>
              )}
            </label>

            {/* SKU and Stock Quantity */}
            <div className="flex gap-4 mt-4">
              <label className="block w-1/2">
                SKU
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  {...register("sku", {
                    required: "SKU is required",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "SKU must be alphanumeric",
                    },
                  })}
                />
                {errors.sku && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.sku.message}
                  </p>
                )}
              </label>

              <label className="block w-1/2">
                Stock Quantity
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  {...register("stockQuantity", {
                    required: "Stock quantity is required",
                    min: {
                      value: 1,
                      message: "Stock quantity must be positive",
                    },
                  })}
                />
                {errors.stockQuantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.stockQuantity.message}
                  </p>
                )}
              </label>
            </div>

            {/* Regular Price and Sale Price */}
            <div className="flex gap-4 mt-4">
              <label className="block w-1/2">
                Regular Price
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  {...register("regularPrice", {
                    required: "Regular price is required",
                    min: { value: 0.01, message: "Price must be positive" },
                  })}
                />
                {errors.regularPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.regularPrice.message}
                  </p>
                )}
              </label>

              <label className="block w-1/2">
                Sale Price
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  {...register("salePrice", {
                    min: { value: 0, message: "Sale price must be positive" },
                    validate: (value) =>
                      parseFloat(value) <=
                        parseFloat(getValues("regularPrice")) ||
                      "Sale price must not exceed regular price",
                  })}
                />
                {errors.salePrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.salePrice.message}
                  </p>
                )}
              </label>
            </div>

            {/* Tags Section */}
            <label className="block text-lg mt-4">
              Tags
              <textarea
                value={tagName}
                onChange={onTextAreaChange}
                className="mt-2 p-2 w-full h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter tags, press enter to add"
              />
            </label>

            {/* Render the Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tagsList.length > 0 &&
                tagsList.map((tag, index) => (
                  <Tags key={index} tags={tag} removeTag={removeTag} />
                ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </section>

        <section className="w-2/5 pl-5 flex flex-col items-center gap-5">
          <div className="text-gray-500 h-64 w-64 bg-white rounded-xl flex items-center justify-center">
            Image Preview
          </div>
          <div className="w-full bg-white p-5 shadow-md rounded-xl">
            <h3 className="text-xl font-medium mb-3">Product Gallery</h3>
            <div className="cursor-pointer h-40 w-full bg-green-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-green-500">
              <p className="text-gray-600">Click here to upload images</p>
              <p className="text-sm text-gray-500">
                Only jpg and png are allowed
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
