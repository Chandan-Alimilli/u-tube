import React, { useState } from "react";

function Button({ category }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <button
        className={`px-2 py-1 m-2 rounded-lg ${
          isSelected ? "bg-white" : "bg-gray-100"
        }`}
        onClick={handleClick}
        disabled={isSelected} // You can remove this line if you want the button to be clickable when selected
      >
        {category}
      </button>
    </div>
  );
}

export default Button;
