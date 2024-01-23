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
    "Beauty",
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
    <div className="flex p-4 ">
      {videoCategories.map((category) => (
        <Button key={category} category={category} />
      ))}
    </div>
  );
}

export default ButtonList;
