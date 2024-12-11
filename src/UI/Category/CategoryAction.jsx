import axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./Category";
import Tabs from "../../components/Tabs";
import Loader from "../Loader";

const CategoryAction = () => {
  const [selectedCategory, setSelectedCategory] = useState("Business");
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const tabOptions = [
    { label: "Politics", href: "#politics" },
    { label: "Sports", href: "#sports" },
    { label: "Entertainment", href: "#entertainment" },
    { label: "Business", href: "#business" },
    { label: "Technology", href: "#technology" },
    { label: "Health", href: "#health" },
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Science", href: "#science" },
    { label: "Education", href: "#education" },
  ];

  const fetchHeadlines = async (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await axios.get(
        `http://localhost:4000/${lowerCaseCategory}`,
        {
          params: { category: lowerCaseCategory },
        }
      );

      console.log("API Response:", response.data); // Debugging

      // Assuming the response is an array of articles
      // You can map over the articles to extract the relevant data
      const fetchedHeadlines = response.data.map((article) => ({
        id: article.topicId, // Assuming topicId is unique
        title: article.title,
        author: article.author,
        image: article.image,
        publisher: article.publisher,
        link: article.link,
        pubLogo: article.pubLogo,
        pubLogoLarge: article.pubLogoLarge,
        isVideo: article.isVideo,
      }));

      setHeadlines(fetchedHeadlines); // Update state with the fetched data
    } catch (err) {
      console.error("Error fetching data:", err); // Log the full error

      // Handle error message more gracefully
      if (err.response) {
        // Server responded with an error status
        setError(
          `Error: ${err.response.status} - ${
            err.response.data.message || "Something went wrong"
          }`
        );
      } else if (err.request) {
        // Request was made but no response was received
        setError("No response received from the server.");
      } else {
        // Something else went wrong
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch when selectedCategory changes
  useEffect(() => {
    fetchHeadlines(selectedCategory);
  }, [selectedCategory]);

  const handleTabClick = (label) => {
    setSelectedCategory(label);
  };

  return (
    <div>
      <Category
        options={tabOptions.map((option) => ({
          ...option,
          isSelected: selectedCategory === option.label,
          onClick: () => handleTabClick(option.label),
        }))}
      />
      {loading && <Loader/>}
      {error && console.log(Error)}
    </div>
  );
};

export default CategoryAction;
