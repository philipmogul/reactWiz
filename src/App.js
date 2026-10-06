
import './App.css';


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
        <h2>Developed by: {developername}</h2>
        <p>{purpose}</p>
        <p>Copyright &copy; {copyrightyear}</p>
        <p>Current Date: {currentdate.toDateString()}</p>
      </>
    </div>
  );
}

export default App;
