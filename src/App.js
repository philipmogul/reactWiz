import {useState , useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';

// Testing multiple components 
// A component renders back jsx 
const Person = () => {

  return (
    <>
      <h3>Nickname : Max
      &nbsp; , &nbsp;  
      The time is : {new Date().toLocaleTimeString()} </h3>
    </>
  );
}

// Different hooks in react
const DiffHooks = () => {
  return (
    <>
      <h3>Different Hooks in React</h3>
      <p>The following are some of the most commonly used hooks in React:</p>
      <ul>
        <li><strong>useState:</strong> Allows you to add state to functional components.</li>
        <li><strong>useEffect:</strong> Lets you perform side effects in functional components.</li>
        <li><strong>useContext:</strong> Allows you to access context values in functional components.</li>
      </ul>
    </>
  );
}


// Components & props 
const Crew = (props) => {
  return (
    <>
      <p>Nickname : {props.nickname} &nbsp; , &nbsp; 
      <span>Age: {props.age} </span></p> 
    </>
  );
}


// Using states in react 
// States are used to store data that can change over time
// Firstly we need to import useState from react
const StatesExample = () => {
  // useState is a hook that allows us to add state to functional components
  // useState returns an array with two elements, the current state value and a function to update it
  // it is good practice to call second element same as name of state but add a set, 
  // because it is a setter function for the first variable 
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>States & Events in React</h3>
      <p> Events are simply the functions that are triggered when an user interacts with the component. 
        E.g. Button onclick , does a specified function. </p>
      <button onClick={() => setCount(count + 1)}>Increment Button For React State : </button>
       &nbsp; <strong><span>{count}</span> </strong> &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement Button For React State : </button>

    </>
  );
}

// Another React hook called useEffect 
const UseEffectExample = () => {



 return(
    <>
      <h3> UseEffect in React </h3>



    </>
 );
}


const UseContextExample = () => {
  return(
    <>
      <h3> UseContext in React </h3>
    </>
  );
}

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


// const can be used instead of a generic function keyword infront of function name 
const App = () => {
  // Variables can be created before the return 
  const appname = "REACT WIZ APP";
  const developername = "Philip Mumo";
  const purpose = "To learn React JS";
  const copyrightyear = "2024";
  const currentdate = new Date();

  return (
    <div className="App">
      <>
        <h1>{appname}</h1>
        <h2>Developed by: {developername} &nbsp; , &nbsp;  
          Copyright &copy; {copyrightyear} &nbsp; , &nbsp; 
          Current Date: {currentdate.toDateString()}
        </h2> 
        <hr />
        <p>Purpose : {purpose}</p>
        <p>
          Calling a component inside another component <Person />
          We can call multiple components within other components eg Person, Car, House etc 
        </p>
        <Crew nickname="Superman" age="28" />
        <Crew nickname="Young Dolph" age="35" />
        <DiffHooks />
        <StatesExample />
        <UseEffectExample />
        <UseContextExample />
        <MovieList />
        



      </>
    </div>
  );
}

export default App;
