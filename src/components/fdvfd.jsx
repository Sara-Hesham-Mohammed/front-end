import React, { useState, useEffect } from "react";
import RepostForm from "../components/reposts/RepostForm";
import ArticlePreview from "../components/reposts/ArticlePreview";
import CaptionInput from "../components/reposts/CaptionInput";

const Newsfeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reposts, setReposts] = useState([]);
  const [showRepostForm, setShowRepostForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: "Sample Article 1",
          image: "https://via.placeholder.com/150",
          excerpt: "This is a sample article description.",
        },
        {
          id: 2,
          title: "Sample Article 2",
          image: "https://via.placeholder.com/150",
          excerpt: "This is another sample article description.",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleRepost = (repostData) => {
    setReposts((prevReposts) => [
      ...prevReposts,
      { ...repostData, likes: 0, comments: [] },
    ]);
    setShowRepostForm(false);
  };

  const openRepostForm = (article) => {
    setSelectedArticle(article);
    setShowRepostForm(true);
  };

  const handleLike = (repostIndex) => {
    const updatedReposts = [...reposts];
    updatedReposts[repostIndex].likes += 1;
    setReposts(updatedReposts);
  };

  const handleCommentChange = (repostIndex, comment) => {
    const updatedReposts = [...reposts];
    updatedReposts[repostIndex].comment = comment; // Ensure it's always a string
    setReposts(updatedReposts);
  };  

  const handleSubmitComment = (repostIndex) => {
    const updatedReposts = [...reposts];
  
    // Check if the comment exists and is not an empty string
    const commentText = updatedReposts[repostIndex].comment || '';
    if (commentText.trim()) {
      updatedReposts[repostIndex].comments.push(commentText.trim());
      updatedReposts[repostIndex].comment = ''; // Clear the textarea after submitting
      setReposts(updatedReposts);
    } else {
      alert('Please add a comment before submitting.');
    }
  };  

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">Newsfeed</h1>

      {/* Repost Form */}
      {showRepostForm && selectedArticle && (
        <RepostForm
          article={selectedArticle}
          onRepost={handleRepost}
          onCancel={() => setShowRepostForm(false)}
        />
      )}

      {/* Display Original News Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article) => (
          <div key={article.id} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
            <ArticlePreview article={article}>
              <button
                onClick={() => openRepostForm(article)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 w-full hover:bg-blue-600 transition-colors"
              >
                Repost
              </button>
            </ArticlePreview>
          </div>
        ))}
      </div>

      {/* Display Reposts */}
      {reposts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Reposts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reposts.map((repost, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
                <ArticlePreview article={repost.article}>
                  <p className="italic mt-2 text-gray-600">"{repost.caption}"</p>
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
                    value={repost.comment || ''}
                    onChange={(e) => handleCommentChange(index, e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full mt-4 p-2 bg-slate-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>

                  {/* Display Comments */}
                  {repost.comments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-800">Comments:</h4>
                      <ul>
                        {repost.comments.map((comment, idx) => (
                          <li key={idx} className="text-sm text-gray-600">{comment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ArticlePreview>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsfeed;