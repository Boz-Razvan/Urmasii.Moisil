import React from "react";
import './styles/NewsCard.css'

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} className="news-image" />
      <div className="news-text">
        <h2 className="news-title">{news.title}</h2>
        <p className="news-description">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
