import {useState , useEffect } from 'react';
import Forms from '../components/Forms';
import FormsWithHooks from '../components/FormsWithHooks';
import Footer from './Footer';

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

const ReactLists = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <>
      <h3>Rendering Lists in React: Mostly by use of Array.map()</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
} 


export default function Home() {
  
    // Variables can be created before the return 
  const appname = "REACT WIZ APP";
  
    return (
    <>
        <h1>{appname}</h1>
        <hr />
        <p>
          Calling a component inside another component <Person />
          We can call multiple components within other components eg Person, Car, House etc 
        </p>
        <Crew nickname="Superman" age="28" />
        <Crew nickname="Young Dolph" age="35" />
        <Forms />
        <FormsWithHooks />
        <DiffHooks />
        <StatesExample />
        <UseEffectExample />
        <UseContextExample />
        <ReactLists />
        <Footer />
        
    </>
  );
}