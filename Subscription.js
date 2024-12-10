import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setUser({ id: 1, plan: "free" });

    if (user) {
      fetchArticles(user.id);
    }
  }, [user]);

  const fetchArticles = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/articles`, {
        headers: {
          Authorization: `Bearer ${userId}`
        }
      });
      setArticles(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data : 'Error fetching articles');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (plan) => {
    setUser({ id: 1, plan }); 
  };

  return (
    <div className="App">
      <h1>Subscription-based Article Service</h1>

      {loading && <p>Loading articles...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <button onClick={() => handleLogin('free')}>Login as Free User</button>
        <button onClick={() => handleLogin('premium')}>Login as Premium User</button>
      </div>

      <div>
        <h2>Available Articles:</h2>
        {articles.length > 0 ? (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
        ) : (
          <p>No articles available</p>
        )}
      </div>
    </div>
  );
}

export default App;