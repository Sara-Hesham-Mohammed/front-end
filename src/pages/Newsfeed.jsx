import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

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

  if (loading) return <Loader/>;

  return (

    //this but map it to ur component
    <>
      //this but map it to ur component
      <NewsCard 
      
      /><div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.map((article) => 
        <NewsCard
          key={article.id}
          imageUrl={article.image}
          date={article.date}
          title={article.title}
          snippet={article.excerpt}
        />)}
      </div>
      </>
  );
};

export default Newsfeed;
