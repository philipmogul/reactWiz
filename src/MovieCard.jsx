import React from "react";

const MovieCard = ({movieData}) => {
  return (
    <div className="movie">
          <div>
            <img src={movieData.Poster !== 'N/A' ? movieData.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movieData.Title} />
          </div>
          <div>
            <span>{movieData.Title}</span> &nbsp; | &nbsp; 
            <span>{movieData.Year} </span> &nbsp; | &nbsp; 
            <span>{movieData.Type}</span>
          </div>
        </div>
  );
};

export default MovieCard;
