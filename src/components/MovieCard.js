import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ title, date, image, rating }) => {
  return (
    <div className="movie-card">

      <div className="movie-image-container">
        <img src={image} alt={title} className="movie-image" />

        <div className="rating">
          <span>{rating}</span>
        </div>
      </div>

      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-date">{date}</p>
      </div>

    </div>
  );
};

export default MovieCard;
