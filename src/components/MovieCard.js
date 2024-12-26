import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ title, date, image, rating }) => {

  //If rating not available or 0 or null or undefined then show NA instead
  const displayRating = (parseFloat(rating) === 0 || !rating) ? 'NA' : rating; 

  return (
    <div className="movie-card">

      <div className="movie-image-container">
        <img src={image} alt={title} className="movie-image" loading="lazy"/>

        <div className="rating">
          <span>{displayRating}</span>
        </div>
      </div>

      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-date">Release Date: {date}</p>
      </div>

    </div>
  );
};

export default MovieCard;
