import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="p-4">
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        results.map((article) => (
          <div key={article._id} className="border-b py-4">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.excerpt}</p>
            <span>{article.source}</span> | <span>{article.category}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
