import React from 'react';

const ArticlePreview = ({ article, children }) => {
  return (
    <div className="p-2 bg-slate-100 rounded-lg border mt-2">
      <h2 className="font-bold">{article.title}</h2>
      <p>{article.excerpt}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Read Full Article
      </a>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default ArticlePreview;
