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
        setTagsList((prevTagsList) => [...prevTagsList, newTag]); // Add the tag to the list
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
    <div className="flex">
      {/* Side Navigation */}
      <SideNavbar className="w-[15%]" />

      <section className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Add a new Product</h2>
        </div>
        <div className="pl-3 w-full h-full p-5 bg-gray-100 rounded-lg shadow-lg">
          <form className="pl-[10px]" action="">
            {/* Product Name */}
            <h3 className="mt-2 text-xl">Product Name</h3>
            <input
              className="mt-2 p-2 w-[25%] border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Example: Snickers"
            />

            {/* Product Description */}
            <h3 className="text-xl mt-4">Product Description</h3>
            <textarea
              className="mt-2 p-2 w-[25%] h-32 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product description here"
            />

            {/* Category */}
            <h3 className="mt-2 text-xl">Category</h3>
            <input
              className="mt-2 p-2 w-[25%] border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />

            {/* Brand Name */}
            <h3 className="mt-2 text-xl">Brand Name</h3>
            <input
              className="mt-2 p-2 w-[25%] border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />

            {/* SKU and Stock Quantity */}
            <div className="flex gap-4">
              <div className="max-w-[12%]">
                <h3 className="mt-2 text-xl">SKU</h3>
                <input
                  className="mt-2 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </div>
              <div className="max-w-[12%]">
                <h3 className="mt-2 text-xl">Stock Quantity</h3>
                <input
                  className="mt-2 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </div>
            </div>

            {/* Regular Price and Sale Price */}
            <div className="flex gap-4">
              <div className="max-w-[12%]">
                <h3 className="mt-2 text-xl">Regular Price</h3>
                <input
                  className="mt-2 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </div>
              <div className="max-w-[12%]">
                <h3 className="mt-2 text-xl">Sale Price</h3>
                <input
                  className="mt-2 p-2 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
              </div>
            </div>

            {/* Tags Section */}
            <h3 className="text-xl mt-4">Tags</h3>
            <textarea
              value={tagName}
              onChange={onTextAreaChange}
              className="mt-2 p-2 w-[25%] h-32 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tags, press enter to add"
            />

            {/* Add other fields as needed */}
          </form>

          <div className="flex gap-2">
            {/* Render the tags */}
            Tags:{" "}
            {tagsList.length > 0 &&
              tagsList.map((tag, index) => (
                <Tags key={index} tags={tag} removeTag={removeTag} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
