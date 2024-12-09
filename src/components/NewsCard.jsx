import React from 'react';

const NewsCard = ({ imageUrl,date, title, snippet }) => {
  return (
    <>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
        src={imageUrl} alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-white/90"> {date} </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">{title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">{snippet}</p>
          </div>
        </div>
      </article>
</>
   
  );
};

export default NewsCard;
