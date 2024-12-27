import '../styles/MovieDetails.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import SearchResults from '../components/SearchResults';

const MovieDetails = ({ query }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  console.log("params id:", id);
  const navigate = useNavigate();

  useEffect(() => {
     // Scroll to top whenever the page is loaded or ID changes
     window.scrollTo(0, 0);

    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        };

        // Fetch movie details by ID
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}`;
        const responseMovie = await fetch(movieUrl, options);
        const dataMovie = await responseMovie.json();
        console.log('Movie Data:', dataMovie);
        setMovie(dataMovie);

        // Fetch trending movies
        const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?language=en-US&sort_by=popularity.desc`;
        const responseTrending = await fetch(trendingUrl, options);
        const dataTrending = await responseTrending.json();
        setMovies(dataTrending.results);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      <div className="movie-detail-container">
        {/* Back Button */}
        <div className="back-arrow" onClick={handleBack}>
          <span className='back-arrow-icon'>&#8592;</span> <span style={{ marginTop: '15%' }}>Back</span>
        </div>

        {/* Poster with Overlay */}
        {movie && movie.backdrop_path && (
          <div className="movie-detail-backposter">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt="Movie Poster"
              className="movie-detail-backposter-image"
            />
          </div>
        )}

        <div className="movie-detail-overlay">
          <div className="movie-detail-flex">
            {/* Smaller Movie Poster */}
            {movie && movie.poster_path && (
              <div className="movie-detail-smallposter">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Small Movie Poster"
                  className="movie-detail-smallposter-image"
                />
              </div>
            )}

            {/* Movie Details */}
            <div className="movie-detail-info">
              <h1 className="movie-detail-title">{movie ? movie.title || movie.name : 'Loading...'}</h1>
              <p className="movie-detail-overview">{movie ? movie.overview : 'Loading...'}</p>

              <div className='movie-detail-flexrow3'>
                <div className='movie-detail-rating'>
                  <p className='movie-detail-rating-no'>{movie?.vote_average != null ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                  <p>TMDB</p>
                </div>

                <div className='watch-trailer-btn'>Watch trailer</div>

                <p style={{ color: "#f19914", marginTop: '1.7%', fontWeight: '600' }}>
                  Production Country: <br />
                  <span style={{ color: '#fff' }}>{movie?.production_countries[0]?.name || 'Unknown'}</span>
                </p>

                <p style={{ color: "#f19914", marginTop: '1.7%', fontWeight: '600' }}>
                  Spoken Languages: <br />
                  <span style={{ color: '#fff' }}>
                    {movie?.spoken_languages?.map((lang, index) => (
                      <span key={index}>
                        {lang.english_name}
                        {index < movie.spoken_languages.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </p>
              </div>

              <div className='movie-detail-flexrow4'>
                <div className='movie-detail-genres'>
                  {movie?.genres?.map((genre) => (
                    <div key={genre.id} className='movie-detail-genres-tag'>
                      <p>{genre.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='movie-detail-flexrow5'>
                <div className='movie-detail-row'>
                  <div className='movie-detail-box'>
                    <h3>Status</h3>
                    <p>{movie?.status || 'N/A'}</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Release Date</h3>
                    <p>{movie?.release_date || 'N/A'}</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Budget</h3>
                    <p>{movie?.budget || 'N/A'}</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Revenue</h3>
                    <p>{movie?.revenue || 'N/A'}</p>
                  </div>
                </div>

                <div className='movie-detail-row'>
                  <div className='movie-detail-box'>
                    <h3>Popularity</h3>
                    <p>{movie?.popularity || 'N/A'}</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Runtime</h3>
                    <p>{movie?.runtime || 'N/A'} min</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Vote Count</h3>
                    <p>{movie?.vote_count || 'N/A'}</p>
                  </div>
                  <div className='movie-detail-box'>
                    <h3>Website</h3>
                    <p>{movie?.website || 'NA'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Content Section */}
      <div className="trending-content">
        {query && (
          <>
            <SearchResults query={query} />
            <hr />
          </>
        )}
        <div>
          <br />
          <h2 className="main-heading">Recommended Movies</h2>
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
