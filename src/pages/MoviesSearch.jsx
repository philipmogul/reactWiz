import React from "react";
import MovieCard from '../MovieCard';
import { Form } from 'react-hook-form';
import {useState , useEffect } from 'react';

const OMDB_API = "http://www.omdbapi.com/?i=tt3896198&apikey=f9d0d859";

const movieData = 
{
    "Title": "Captain Marvel",
    "Year": "2019",
    "imdbID": "tt4154664",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
}

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?${OMDB_API}&s=${title}`);
    const data = await response.json();
    //console.log(data.Search);
    // below is how to pass data to dom using state 
    setMovies(data.Search);
  }

  // useEffect can be used to load when a component loads 
  // call the searchMovie function when the component loads
  useEffect(() => {
    searchMovie("Marvel");
  }, []);


  return (
    <>
      <hr />
      <h3>MOVIES APP</h3>
      <div>
        <input type="text" placeholder="Search for a movie..." value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => searchMovie(searchTerm)}>Search</button>
      </div> <br />
      


        {
          movies.length > 0 ? (  
             <div className="container" style={{ display: 'flex', flexWrap: 'wrap', padding: '20px', margin: '20px', justifyContent: 'center' }}>
                
                {movies.map((movie) => (
                  <MovieCard movieData={movie} key={movie.imdbID} />
                ))}


              </div>
                  ) : (
                    <div className="empty">
                    <h3>No movies found</h3>
                    </div>
                  )

        }



        
      

      <hr />
      </>
  );
}


export default function MoviesSearch()
{
    return(
        <>
        <h1>Movies Search Page</h1>
        <MovieList />
        </>
    );
}