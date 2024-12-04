import React, { useEffect, useState } from "react";

const Newsfeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {news.map((article) => (
        <div key={article.id} className="border rounded-lg p-4">
          <img src={article.image} alt={article.title} className="rounded-md" />
          <h3 className="text-xl font-bold">{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;
