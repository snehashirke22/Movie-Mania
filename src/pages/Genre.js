import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Genre.css';
import MovieList from '../components/MovieList';
import SearchResults from '../components/SearchResults';

const Genre = ({query}) => {
    const { genreId, genreName } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    },
                };
         
        const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
    } catch (err) {
        console.error('Error fetching movies:', err);
    } 
};

fetchMovies();
}, [genreId]); 


    return (
        <div>

            <div className="genre-movies-list">
                {/* If search results exist, show them */}
                {query && (
                    <>
                        <SearchResults query={query} />
                        <hr />
                    </>
                )}


                {/* Always show the normal API response, even if search results exist */}
                <div>
                        <div>
                            <br/>
                            <h2 className='genre-name'>{genreName} Movies</h2>
                            <MovieList movies={movies} />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Genre;
