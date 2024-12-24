import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import Deadpool from '../assets/Deadpool.jpg';
import Intersteller from '../assets/intersteller.jpg';
import Venom from '../assets/venom.jpg';

const MovieCarousel = () => {
  const movies = [
    {
      title: "Deadpool and wolverine",
      description: "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse.",
      image: Deadpool,
      link: "/"
    },
    {
      title: "Intersteller",
      description: "Astronauts travel through a wormhole to find a new planet as Earth faces extinction, exploring love, time, and survival.",
      image: Intersteller,
      link: "/"
    },
    {
      title: "Venom : The Last Dance",
      description: "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters.",
      image: Venom,
      link: "/"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 6000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [movies.length]);

  // Manual control (Next/Prev)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        
        <div className="carousel-slide">
          <img
            src={movies[currentIndex].image}
            alt={movies[currentIndex].title}
            className="carousel-image"
          />

          <div className="carousel-content">
            <h2>{movies[currentIndex].title}</h2>
            <p>{movies[currentIndex].description}</p>
            <a href={movies[currentIndex].link} className="btn">Watch Trailer</a>
          </div>
        </div>

        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default MovieCarousel;
