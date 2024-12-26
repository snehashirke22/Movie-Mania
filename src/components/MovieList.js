import React from 'react';
import MovieCard from './MovieCard';
import "../styles/MovieList.css";

const formatDate = (dateString) => {
  if (!dateString) {
    return 'N/A';
  }
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options);

};
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">

      {movies && movies.length > 0 ? (

        movies.map(movie => (
          <MovieCard
            key={movie.id}
            image={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image+Available'} //Placeholder image if image not available
            rating={(movie.vote_average || 0).toFixed(1)}
            title={movie.title || movie.name}
            date={formatDate(movie.release_date || movie.first_air_date)} />
        ))
      ) : (
        <p> Loading Movies...</p>
      )}
    </div>
  )
}

export default MovieList