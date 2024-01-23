import React, { useState } from "react";

function Button({ category }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <button
        className={`px-1 py-1 m-2 shadow-xl rounded-xl${
          isSelected ? "bg-white" : "bg-gray-200"
        }`}
        onClick={handleClick}
        disabled={isSelected}
      >
        {category}
      </button>
    </div>
  );
}

export default Button;
