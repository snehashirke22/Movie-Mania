import React, { useState, useEffect } from 'react'
import '../styles/Trending.css';
import MovieList from '../components/MovieList';
import poster from '../assets/poster.jpg'
import Poster from '../components/Poster';
import SearchResults from '../components/SearchResults';


const Trending = ({query}) => {
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
    
                    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
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
            <Poster image={poster} />
            <div className="trending-content">
                {/* If search results exist, show them */}
                <SearchResults query={query} />

                {/* Always show the normal API response, even if search results exist */}
                        <div>
                            <hr/>
                            <br/>
                            <h2 style={{ marginLeft: '2%'}}>Trending Movies</h2>
                            <MovieList movies={movies} />
                        </div>
            </div>
        </div>
    );
}

export default Trending