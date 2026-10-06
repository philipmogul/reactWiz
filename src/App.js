import {useState} from 'react';
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
      <h3>States in React</h3>
      <button onClick={() => setCount(count + 1)}>Increment Button For React State : </button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement Button For React State : </button>
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
        <StatesExample />

      </>
    </div>
  );
}

export default App;
