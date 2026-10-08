import React from "react";

const MovieCard = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>Year: {props.year}</p>
      <p>Genre: {props.genre}</p>
    </>
  );
};

export default MovieCard;
