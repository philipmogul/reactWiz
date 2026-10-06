
import './App.css';


// const can be used instead of a generic function keyword infront of function name 
const App = () => {
  // Variables can be created before the return 
  const developername = "Philip Mumo";
  const copyrightyear = "2024";
  const currentdate = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <h2> WELCOME TO <b><u><em>REACT WIZ APP</em></u></b>!!! </h2>
        <hr />
        <h3> This is a simple React application. </h3>
        <h1> Hello, {developername} </h1>
        <h4> The current year is {copyrightyear} </h4>
        <h4> The current date is {currentdate.toDateString()} </h4>
      </header>
    </div>
  );
}

export default App;
