import React, { useState } from "react";
import Category from "./Category";

const CategoryAction = () => {
  const [selectedCategory, setSelectedCategory] = useState("Politics");

  const tabOptions = [
    {
      label: "Politics",
      href: "#politics",
      isSelected: selectedCategory === "Politics",
    },
    {
      label: "Sports",
      href: "#sports",
      isSelected: selectedCategory === "Sports",
    },
    {
      label: "Entertainment",
      href: "#entertainment",
      isSelected: selectedCategory === "Entertainment",
    },
    {
      label: "Business",
      href: "#business",
      isSelected: selectedCategory === "Business",
    },
    {
      label: "Technology",
      href: "#technology",
      isSelected: selectedCategory === "Technology",
    },
    {
      label: "Health",
      href: "#health",
      isSelected: selectedCategory === "Health",
    },
    {
      label: "Lifestyle",
      href: "#lifestyle",
      isSelected: selectedCategory === "Lifestyle",
    },
    {
      label: "Science",
      href: "#science",
      isSelected: selectedCategory === "Science",
    },
    {
      label: "Education",
      href: "#education",
      isSelected: selectedCategory === "Education",
    },
    {
      label: "Crime and Law",
      href: "#crime-and-law",
      isSelected: selectedCategory === "Crime and Law",
    },
  ];

  const handleTabClick = (label) => {
    setSelectedCategory(label);
  };

  return (
   
    <Category
    options={tabOptions.map((option) => ({
        ...option,
        onClick: () => handleTabClick(option.label),
      }))}
    />
  );
};

export default CategoryAction;
