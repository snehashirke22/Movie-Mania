// components/SearchResults.js
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';

const SearchResults = ({ query }) => {
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        const fetchSearchMovies = async () => {
            if (!query) return; // Only fetch if there is a query
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    },
                };

                const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US`;
                const response = await fetch(url, options);
                const data = await response.json();
                setSearchMovies(data.results);
            } catch (err) {
                console.error('Error fetching search movies:', err);
            } 
        };

        fetchSearchMovies();
    }, [query]); // Fetch search results when query changes

    return (
        <div>
            {/* Show search results if available */}
            {query && searchMovies.length > 0 && (
                <div>
                    <br />
                    <h2 className='main-heading'>Movies Matching Your Search</h2>
                    <MovieList movies={searchMovies} />
                    <br />
                </div>
            )}

            {/* Show "No results found" if there are no search results */}
            {query && searchMovies.length === 0 && (
                <div>
                    <br/>
                    <p className='main-heading'>(No Movies Found for "{query}". Try searching with a different name.)</p>
                    <br />

                </div>
            )}
        </div>
    );
};

export default SearchResults;
