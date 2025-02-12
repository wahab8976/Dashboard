import { useState, useEffect, useRef } from "react";
import { MoreVertical, Pencil, Trash, Eye } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

export default function CategoriesTable() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch categories");
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="p-6 text-gray-700">Loading categories...</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Category Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                No. of Products
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Availability
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {category.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {category.description || "No description"}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {category.items || 0}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    category.availabilityStatus
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {category.availabilityStatus ? "Available" : "Out of Stock"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 relative">
                  <ActionMenu category={category} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionMenu({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        <MoreVertical size={20} />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border border-gray-200 z-10">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Eye size={16} className="mr-2" /> View Products
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Pencil size={16} className="mr-2" /> Edit
          </button>
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100">
            <Trash size={16} className="mr-2" /> Delete
          </button>
        </div>
      </Transition>
    </div>
  );
}
