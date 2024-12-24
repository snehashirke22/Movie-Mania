import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Genre.css'; 
import MovieList from '../components/MovieList';

const Genre = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
        };
         
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));

    }, [genreId]);

    return (
        <div>
            <div className="genre-movies-list">
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default Genre;
