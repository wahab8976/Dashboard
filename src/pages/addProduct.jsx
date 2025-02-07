import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Tags from "../components/Tags";
import { useEffect } from "react";

const AddProduct = () => {
  const [tagName, setTagName] = useState("");
  const [tagsList, setTagsList] = useState([]);

  const onTextAreaChange = (e) => {
    const value = e.target.value;
    setTagName(value);

    // If the value contains a newline character, add the tag to the list
    if (value.includes("\n")) {
      const newTag = value.trim();
      if (newTag && !tagsList.includes(newTag)) {
        setTagsList((prevTagsList) => [...prevTagsList, newTag]);
        setTagName(""); // Clear the tag input field
      }
    }
  };

  const removeTag = (tag) => {
    setTagsList((prevTagsList) => prevTagsList.filter((t) => t !== tag));
  };

  useEffect(() => {
    console.log(`Taglist is ${tagsList}`);
  }, [tagsList]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Navigation */}
      <SideNavbar className="w-[15%]" />

      <div className="flex w-full p-5">
        <section className="rounded-xl bg-white shadow-md p-6 w-3/5">
          <h2 className="text-2xl font-serif mb-4">Add a New Product</h2>
          <form>
            {/* Product Name */}
            <label className="block text-lg mt-4">
              Product Name
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Snickers"
              />
            </label>

            {/* Product Description */}
            <label className="block text-lg mt-4">
              Product Description
              <textarea
                className="mt-2 p-2 w-full h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product description here"
              />
            </label>

            {/* Category */}
            <label className="block text-lg mt-4">
              Category
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Chocolate"
              />
            </label>

            {/* Brand Name */}
            <label className="block text-lg mt-4">
              Brand Name
              <input
                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
              />
            </label>

            {/* SKU and Stock Quantity */}
            <div className="flex gap-4 mt-4">
              <label className="block w-1/2">
                SKU
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </label>
              <label className="block w-1/2">
                Stock Quantity
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </label>
            </div>

            {/* Regular Price and Sale Price */}
            <div className="flex gap-4 mt-4">
              <label className="block w-1/2">
                Regular Price
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </label>
              <label className="block w-1/2">
                Sale Price
                <input
                  className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
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
