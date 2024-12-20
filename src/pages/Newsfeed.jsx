import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Loader from "../UI/Loader";
import axios from "axios";
import Tabs from "../components/Tabs";
import RepostForm from "../components/reposts/RepostForm";
import ArticlePreview from "../components/reposts/ArticlePreview";
import ErrorPage from "./Error";
import CategoriesBar from "../components/CategoriesBar";
import Header from "../UI/Header";

const Newsfeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reposts, setReposts] = useState([]);
  const [showRepostForm, setShowRepostForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [hasError, setHasError] = useState(false);
  // Fetching the news headlines
  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get("http://4.251.122.109/top-headlines");
        console.log("API Response:", response.data.news.articles); // Debugging

        setNews(response.data.news.articles); // Access nested articles
      } catch (err) {
        setHasError(true);
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchHeadlines();
  }, []); // Runs only once when the component mounts

  // Function to handle reposting
  const handleRepost = (repostData) => {
    setReposts((prevReposts) => [
      ...prevReposts,
      { ...repostData, likes: 0, comments: [] },
    ]);
    setShowRepostForm(false);
  };

  // Open the repost form
  const openRepostForm = (article) => {
    setSelectedArticle(article);
    setShowRepostForm(true);
  };

  // Handle likes
  const handleLike = (repostIndex) => {
    const updatedReposts = [...reposts];
    updatedReposts[repostIndex].likes += 1;
    setReposts(updatedReposts);
  };

  // Handle comment changes
  const handleCommentChange = (repostIndex, comment) => {
    const updatedReposts = [...reposts];
    updatedReposts[repostIndex].comment = comment;
    setReposts(updatedReposts);
  };

  // Submit a comment
  const handleSubmitComment = (repostIndex) => {
    const updatedReposts = [...reposts];
    const commentText = updatedReposts[repostIndex].comment || "";

    if (commentText.trim()) {
      updatedReposts[repostIndex].comments.push(commentText.trim());
      updatedReposts[repostIndex].comment = ""; // Clear the input
      setReposts(updatedReposts);
    } else {
      alert("Please add a comment before submitting.");
    }
  };

  if (loading) return <Loader />; // Show loader until data is fetched

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">
        Newsfeed
      </h1>

      {/* Repost Form */}

      <div>
        {showRepostForm && selectedArticle && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500 bg-opacity-50"
            onClick={() => setShowRepostForm(false)} // Close modal when clicking outside
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <RepostForm
                article={selectedArticle}
                onRepost={handleRepost}
                onCancel={() => setShowRepostForm(false)}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <CategoriesBar />
        <Tabs
          topHeadlines={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article, index) => (
                <NewsCard
                  key={index}
                  article={article}
                  openRepostForm={() => openRepostForm(article)}
                />
              ))}
            </div>
          }
          followingList={
            reposts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Reposts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reposts.map((repost, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <ArticlePreview article={repost.article}>
                        <p className="italic mt-2 text-gray-600">
                          "{repost.caption}"
                        </p>
                        <div className="flex gap-3 mt-4">
                          <button
                            onClick={() => handleLike(index)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            Like {repost.likes}
                          </button>
                          <button
                            onClick={() => handleSubmitComment(index)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                          >
                            Comment
                          </button>
                        </div>

                        {/* Comment Textarea */}
                        <textarea
                          value={repost.comment || ""}
                          onChange={(e) =>
                            handleCommentChange(index, e.target.value)
                          }
                          placeholder="Add a comment..."
                          className="w-full mt-4 p-2 bg-slate-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        {/* Display Comments */}
                        {repost.comments.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-gray-800">
                              Comments:
                            </h4>
                            <ul>
                              {repost.comments.map((comment, idx) => (
                                <li key={idx} className="text-sm text-gray-600">
                                  {comment}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </ArticlePreview>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default Newsfeed;
