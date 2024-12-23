import React from 'react'
import '../styles/Poster.css';

const Poster = ({image}) => {
  return (
    <>
    <div className="trending-poster">
        <img
          src={image}  // Replace this URL with your actual poster image URL
          alt="Trending Poster"
          className="poster-image"
        />
      </div>
    </>
  )
}

export default Poster