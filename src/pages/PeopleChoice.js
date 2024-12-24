import React, { useState, useEffect } from 'react'
import '../styles/Trending.css';
import MovieList from '../components/MovieList';
import Poster from '../components/Poster';
import poster3 from '../assets/poster3.jpg'

const PeopleChoice = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));

    }, [])

    return (
        <div>
            <Poster image={poster3} />
            <div className="trending-content">
                <MovieList movies={movies} />
            </div>
        </div>
    );
}

export default PeopleChoice