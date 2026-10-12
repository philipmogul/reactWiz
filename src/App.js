import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Link } from 'react-router-dom';

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
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Landing Page</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        



      </>
    </div>
  );
}

export default App;
