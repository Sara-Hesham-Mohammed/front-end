
import React, { useState, useEffect } from "react";


const OpinionCard = ({ title, author, excerpt }) => (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{author}</p>
      <p>{excerpt}</p>
    </div>
  );
  
  const Opinion = () => {
    const [opinions, setOpinions] = useState([]);
  
    useEffect(() => {
      fetch("/api/opinions")
        .then((res) => res.json())
        .then((data) => setOpinions(data));
    }, []);
  
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {opinions.map((opinion) => (
          <OpinionCard
            key={opinion.id}
            title={opinion.title}
            author={opinion.author}
            excerpt={opinion.excerpt}
          />
        ))}
      </div>
    );
  };
  
  export default Opinion;
  