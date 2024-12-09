import React from "react";
import NewsCard from "./NewsCard";

const TestNewsCard = () => {
  const fakeNews = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      date: "2024-12-08",
      title: "Breaking News: React is Great!",
      snippet: "React allows developers to create dynamic web applications with ease.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      date: "2024-12-07",
      title: "New Features in JavaScript",
      snippet: "The latest JavaScript update introduces several exciting features.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      date: "2024-12-06",
      title: "Tech Industry Booming",
      snippet: "The technology sector continues to grow at an unprecedented rate.",
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {fakeNews.map((article) => (
        <NewsCard
          key={article.id}
          imageUrl={article.image}
          date={article.date}
          title={article.title}
          snippet={article.snippet}
        />
      ))}
    </div>
  );
};

export default TestNewsCard;
