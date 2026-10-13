import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import MovieSearch from './pages/MoviesSearch';
import BootstrapStuff from './BootstrapStuff';

// const can be used instead of a generic function keyword infront of function name 
const App = () => {

  return (

    // I installed: npm i react-router-dom
        // I went to index.js and wrapped the <App /> component with <BrowserRouter> </BrowserRouter> tags
        // On this page, i imported {Routes, Route} from react-router-dom and created a <Routes> tag with <Route> tags inside it.
        
    <div className="App">
      <>
        <nav>
          <Link to="/">Landing</Link> &nbsp; | &nbsp;
          <Link to="/home">Home</Link> &nbsp; | &nbsp;
          <Link to="/profile">Profile</Link> &nbsp; | &nbsp;
          <Link to="/movies">Movies</Link> &nbsp; | &nbsp;
          <Link to="/login">Login</Link> &nbsp; | &nbsp;
          <Link to="/signup">Signup</Link> &nbsp; | &nbsp;
          <Link to="/boostrap">Bootstrap</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Landing Page</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/boostrap" element={<BootstrapStuff />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        



      </>
    </div>
  );
}

export default App;
