import React, { useEffect, useState } from 'react';
import '../styles/Home.css'; 
import MovieList from '../components/MovieList';
import Carousel from '../components/Carousel';
const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
      };

          fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
          .then(res => res.json())
          .then(data =>setMovies(data.results))
          .catch(err => console.error(err));
        },[])
console.log(movies);
    return (
        <div>
            <Carousel />
            <div className="movie-list-content">
                <MovieList movies={movies}/>
            </div>
        </div>
    );
};

export default Home;
