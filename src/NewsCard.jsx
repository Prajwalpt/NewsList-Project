import React from "react";
import "./newsCard.css";

const NewsCard = ({ title, description, imageUrl, url, author }) => {
  return (
    <div className="newscard">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{author ? `By ${author}` : "Unknown Author"}</p>
        <a href={url} target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
