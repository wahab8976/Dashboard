import { Select, SelectItem } from "@heroui/react";
import { useState } from "react";

const SelectDropDown = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  const handleFetchAllCategories = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        size="lg"
        color="secondary"
        variant="faded"
        onSelectionChange={setSelectedCategory}
        onOpenChange={(isOpen) => isOpen && handleFetchAllCategories()}
        className="max-w-xs p-3 bg-white shadow-inner rounded-lg neumorphic-header"
        label="Select a Category"
        placeholder="Choose a category"
        scrollShadowProps={{
          isEnabled: false,
        }}
      >
        {categories.length > 0 ? (
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category.name}
              className="bg-blue-100 hover:bg-blue-200 text-black neumorphic-item dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white p-2 rounded-md"
            >
              {category.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem disabled className="text-gray-500">
            No categories available
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

export default SelectDropDown;
