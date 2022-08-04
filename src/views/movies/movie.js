import React, { useState, useEffect } from "react";
import "./movie.css";
import Navbar from "../../Components/navbar/navbar";
import axios from "axios";
import movielb  from "../../Assets/img/movielibrary/HO00008.jpg";

function Movie() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    async function fetchData() {
      try {
        const data = (await axios.get("http://localhost:5000/api/movies/getallmovies", {})).data;
        setmovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="movie_return_div">
      <Navbar />

      {
        movie.map((moviee) => {
        return (
          <div className="movie-page">
            <div className="movie-page-card">
                <div className="movie-page-card-img">
                <img src={movielb} alt="" />
                </div>
                <p>{moviee.movieName}</p>
                <p></p>
                <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Movie;
