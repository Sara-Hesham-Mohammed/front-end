import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Loader from "../UI/Loader";
import axios from 'axios'; 
import Tabs from "../components/Tabs";
import ErrorPage from "./Error";
import CategoriesBar from "../components/CategoriesBar";


const Newsfeed = () => {

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
        return <ErrorPage/>
      }
    };

    fetchHeadlines();  // Call the function to fetch headlines
  }, []);  // Empty array means this runs once when the component mounts

  if (loading) return <Loader/>;

  const tabOptions = [
    { label: 'Settings', href: '#settings', isSelected: false },
    { label: 'Messages', href: '#messages', isSelected: false },
    { label: 'Archive', href: '#archive', isSelected: false },
    { label: 'Notifications', href: '#notifications', isSelected: true },
  ];

  return (

    //this but map it to ur component
    <>
   <CategoriesBar/>
      <Tabs>
      </Tabs>

      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
          <div className="text-center">
              <h1 className="text-3xl text-gray-800 font-semibold">
                  Blog
              </h1>
              <p className="mt-3 text-gray-500">
                  Blogs that are loved by the community. Updated every hour.
              </p>
          </div>

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
        </section>
      </>
  );
};

export default Newsfeed;
