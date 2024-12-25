import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import SearchResults from '../components/SearchResults';
import MovieList from '../components/MovieList';

const Home = ({ query }) => {
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

                const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
                const response = await fetch(url, options);
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                console.error('Error fetching movies:', err);
            } 
        };

        fetchMovies();
    }, []); 

    return (
        <div>
            <Carousel />
            <div className="movie-list-content">
                {/* If search results exist, show them */}
                {query && (
                    <>
                        <SearchResults query={query} />
                        <hr />
                    </>
                )}

                {/* Always show the normal API response, even if search results exist */}
                        <div>
                            <br/>
                            <MovieList movies={movies} />
                        </div>
            </div>
        </div>
    );
};

export default Home;
