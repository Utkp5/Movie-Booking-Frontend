import React, { useState } from "react";
import "./movie_2.css";

function MovieSecond() {
  const [Movie2, setmovie2] = useState([
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO00004.webp"),
      movie2Name: "Hindi Medium",
      movie2Genres: "Drama",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO00008.jpg"),
      movie2Name: "Super 30",
      movie2Genres: "Education",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO00009.webp"),
      movie2Name: "Raazi",
      movie2Genres: "Nation",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO000010.webp"),
      movie2Name: "URI Surgical Strick",
      movie2Genres: "Nation",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO000011.webp"),
      movie2Name: "Kesari",
      movie2Genres: "History",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO000013.jpg"),
      movie2Name: "Kabir Singh",
      movie2Genres: "Drama",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO000014.webp"),
      movie2Name: "KGF",
      movie2Genres: "Action",
    },
    {
      movie2Img: require ("../../Assets/img/movielibrary/HO000017.webp"),
      movie2Name: "Joker",
      movie2Genres: "Horror",
    },
  ]);

  return (
    <div>
      <p className="movie2_p">All Time Trending Movies</p>
      <div className="movie2_container">
        {
            Movie2.map((movie2) => {
            return (
            <div className="movie2_main">
              <div className="movie2_img_div">
                <img className="movie2_img" src={movie2.movie2Img} alt=""/>
              </div>
              <div className="movie2_name">{movie2.movie2Name}</div>
              <div className="movie2Genres">{movie2.movie2Genres}</div>
            </div>
            );
        })
    }
      </div>
    </div>
  );
}

export default MovieSecond;
