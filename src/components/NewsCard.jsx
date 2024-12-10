import React from 'react';

const NewsCard = ({article, openRepostForm}) => {
  return (
    <>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        src={article.urlToImage} alt={article.title}
        className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time dateTime= {article.publishedAt} className="block text-xs text-white/90"> {article.publishedAt} </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">{article.title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">{article.description}</p>
          
            <button
                  onClick={() => openRepostForm(article)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 w-full hover:bg-blue-600 transition-colors"
                >
                  Repost
                </button>
          </div>
        </div>
      </article>
</>
   
  );
};

export default NewsCard;
