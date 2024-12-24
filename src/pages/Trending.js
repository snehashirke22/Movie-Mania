import React, { useState, useEffect } from 'react'
import '../styles/Trending.css';
import MovieList from '../components/MovieList';
import poster from '../assets/poster.jpg'
import Poster from '../components/Poster';

const Trending = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };

        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));

    }, [])

    return (
        <div>
            <Poster image={poster} />
            <div className="trending-content">
                <MovieList movies={movies} />
            </div>
        </div>
    );
}

export default Trending