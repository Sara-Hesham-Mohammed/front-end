import React from "react";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const { type } = useParams();

  return (
    <div className="container">
      <h1>Payment Result</h1>
      <div id="result-message">
        <p>Payment was {type}!</p>
      </div>
      <a href="/" className="btn">Go back</a>
    </div>
  );
};

export default ResultPage;
