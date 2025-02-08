import React from "react";
import cross from "../assets/cross.svg";
import { useState } from "react";
import ConfirmDeletion from "./ConfirmDeletion";
// This state is being shared by the parent component and the child component. The parent component is responsible for setting the state, and the child component is responsible for displaying the state. The parent component passes the state and the setter function as props to the child component. The child component uses these props to display the state and call the setter function when needed.
// This is the child component and Product Card is the parent component

const OverFlowBadge = ({
  itemName,
  productDBId,
  overFlowBadge,
  setOverFlowBadge,
}) => {
  const [confirmDeletion, setConfirmDeletion] = useState(false);

  return (
    <div className="bg-green-200 w-64 p-6 shadow-xl rounded-2xl hover:bg-red-300 transition duration-300">
      <span className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Manage Item</h2>
        <img
          onClick={() => setOverFlowBadge(!overFlowBadge)}
          src={cross}
          alt="Close"
          className="w-5 h-5 cursor-pointer hover:opacity-70 ml-2"
        />
      </span>
      <p className="text-sm text-gray-500 mt-1">
        Choose "{itemName}" to edit or delete.
      </p>
      {/* Buttons Section */}
      <div className="flex justify-between mt-6 space-x-4">
        {/* Edit Button */}
        <button className="cursor-pointer flex-1 flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
          <span className="font-medium">Edit Item</span>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => setConfirmDeletion(true)}
          className="cursor-pointer flex-1 flex items-center justify-center bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
        >
          <span className="font-medium">Delete</span>
        </button>
      </div>
      {/* This is a confirmaton before deleting an item */}

      {confirmDeletion && (
        <ConfirmDeletion
          productDBId={productDBId}
          itemName={itemName}
          confirmDeletion={confirmDeletion}
          setConfirmDeletion={setConfirmDeletion}
        />
      )}
    </div>
  );
};

export default OverFlowBadge;
