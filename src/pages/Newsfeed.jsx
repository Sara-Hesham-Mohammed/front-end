import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Loader from "../UI/Loader";
import axios from 'axios'; // Ensure axios is installed via npm
import Tabs from "../components/Tabs";


const Newsfeed = () => {

  /*** this section fe moshkela, it doesnt render ay haga, fix tthe API then we'll see***/ 
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        // Send GET request to your backend server on localhost:4000
        const response = await axios.get('http://localhost:4000/top-headlines');
        
        // Log the response data for debugging
        console.log('API Response:', response.data);

        // Update the state with fetched headlines
        setNews(response.data.news);
        setLoading(false);  // Stop loading once data is fetched
      } catch (err) {
        setLoading(false);
      }
    };

    fetchHeadlines();  // Call the function to fetch headlines
  }, []);  // Empty array means this runs once when the component mounts

  if (loading) return <Loader/>;
  /******/ 

  return (

    //this but map it to ur component
    <>
    <Tabs>
    </Tabs>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.map((article, index) => 
        <NewsCard
          key={index}
          imageUrl={article.photo_url}
          date={article.published_datetime_utc}
          title={article.title}
          snippet={article.snippet}
        />)}
      </div>
      </>
  );
};

export default Newsfeed;
