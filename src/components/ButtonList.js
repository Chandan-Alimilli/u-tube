import React from "react";
import Button from "./Button";

function ButtonList() {
  const videoCategories = [
    "All",
    "Music",
    "Tutorial",
    "Travel",
    "Comedy",
    "Tech",
    "Fitness",
    "Food",
    "Science",
    "Vlogs",
    "Animation",
    "Fashion",
    "Review",
    "Sports",
    "Interviews",
    "Education",
    "Documentary",
  ];

  return (
    <div className="flex px-4 py-1  bg-white ">
      {videoCategories.map((category) => (
        <Button key={category} category={category} />
      ))}
    </div>
  );
}

export default ButtonList;
