import React from "react";

const ConfirmDeletion = ({ itemName, confirmDeletion, setConfirmDeletion }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Delete Button */}
      <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none">
        Delete Item
      </button>

      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-gray-800">
            Confirm Deletion
          </h2>
          <p className="text-gray-600 mt-2">
            Are you sure you want to delete{" "}
            <span className="text-red-500 font-bold">{itemName}</span> ? This
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
            <button className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletion;
