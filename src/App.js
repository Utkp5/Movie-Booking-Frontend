import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/home/home";
import About from "./views/about/about";
import Movie from "./views/movies/movie";
import Contact from "./views/contact/contact";
import Register from "./views/register/register";
import Login from "./views/login/login";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Movie' element={<Movie />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
