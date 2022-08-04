import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movielibrary.css";

function Movielb() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      auth: localStorage.getItem("token"),
    };
    async function fetchData() {
      try {
        const data = (
          await axios.get("http://localhost:5000/api/movies/getallmovies", {})
        ).data;
        setmovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
    <div class="movie-page-banner">
        <p className="movie-page-banner-p">Have original experience of the movie on day first</p>
      </div>
      <div className="movie-page">
        {
            movie.map((moviee) => {
             return (
                <div className="movie-page-card">
                  <div className="movie-page-card-div-img">
                    <a className="movie-page-a" href=""><img className="movie-page-card-img" src={moviee.movielbImg} alt="" /></a>
                  </div>
                  <p className="movie-page-p" >{moviee.movieName}</p>
                  <p className="movie-page-p1" >{moviee.language} . {moviee.genres} . {moviee.year}</p>
                  <p className="movie-page-p2" >{moviee.theatre}&nbsp;&nbsp;{moviee.time} </p>
                </div>
                );
        })}
      </div>
    </div>
  );
}

export default Movielb;
