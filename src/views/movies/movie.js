import React from "react";
import "./movie.css";
import Navbar from "../../Components/navbar/navbar";
import Movielb from "../../Components/movies/movielibrary";
import Footer from "../../Components/footer/footer";

function Movie() {
 
  return (
    <div className="movie_return_div">

      <Navbar />

      <Movielb />

      <Footer />
    </div>
  );
}

export default Movie;
