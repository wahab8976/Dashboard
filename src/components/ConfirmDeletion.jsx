import React, { useState } from "react";
import Spinner from "./Spinner"; // Ensure you have a Spinner component

const ConfirmDeletion = ({ itemName, productDBId, setConfirmDeletion }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteProduct = async (productDBId) => {
    console.log(`Deleting item with ID: ${productDBId}`);
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productDBId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete the product: ${response.statusText}`);
      }

      const data = await response.json();
      alert("Product deleted successfully!");
      console.log(data.message);
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete the product. Please try again.");
    } finally {
      setLoading(false);
      setConfirmDeletion(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Show Spinner during loading */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Spinner />
        </div>
      )}

      {/* Modal */}
      {!loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mt-2">
              Are you sure you want to delete{" "}
              <span className="text-red-500 font-bold">{itemName}</span>? This
              action cannot be undone.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setConfirmDeletion(false)}
                className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(productDBId)}
                className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmDeletion;
