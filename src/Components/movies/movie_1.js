import React, { useState } from "react";
import "./movie_1.css";

function Movie_1() {
  const [movies, setmovies] = useState([
    {
      movieImage:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjUlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128946-fvrsyqswpt-portrait.jpg",
      movieName: "EK Villain Returns",
      genres: "Action/Romantic/Thriller",
    },
    {
      movieImage:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAxNmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00128225-rjrxwrpkjp-portrait.jpg",
      movieName: "Vikrant Rona",
      genres: "Adventure/Thriller/Mystery",
    },
    {
      movieImage:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjQlICA0M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00075253-ccyjknqens-portrait.jpg",
      movieName: "Shamshera",
      genres: "Action/Drama",
    },
    {
      movieImage:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333999-sgeslpqajm-portrait.jpg",
      movieName: "Challa Mud ke Nhi aya",
      genres: "Action/Romantic/Thriller",
    },
    {
      movieImage:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA1NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094131-mkdsdrudql-portrait.jpg",
      movieName: "Rocketry",
      genres: "Biography/Drama",
    },
  ]);
  return (
    <div>
    <p className="movies_p">Recommended Movies</p>
      <div className="movie_1_container">
        {movies.map((movies) => {
          return (
            <div className="main">
              <div className="movie_img">
                <a href=""><img className="movie_poster" src={movies.movieImage} alt="" /></a>
              </div>
              <div className="movie_name">{movies.movieName}</div>
              <div className="genres">{movies.genres}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie_1;
