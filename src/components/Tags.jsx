import React from "react";
import crossImage from "../assets/cross.svg";

const Tags = ({ tags, removeTag }) => {
  return (
    <span className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white font-medium rounded-full px-4 py-1 shadow-md hover:bg-blue-700">
      <span>{tags}</span>
      <img
        onClick={() => removeTag(tags)} // Call removeTag from parent
        src={crossImage}
        alt="Remove Tag"
        className="w-4 h-4 cursor-pointer hover:opacity-70 ml-2"
      />
    </span>
  );
};

export default Tags;
