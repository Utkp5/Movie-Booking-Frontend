import React, { useState } from "react";
import "./moviefacts.css";


function Moviefacts() {
  const [Moviefacts, setMoviefacts] = useState([
    {
      factsImg: require("../../Assets/img/laughter/laughter_utkp_1.avif"),
      factsText: "hey",
    },
    {
      factsImg: require("../../Assets/img/laughter/laughter_utkp_1.avif"),
      factsText: "hey",
    },
    {
      factsImg: require("../../Assets/img/laughter/laughter_utkp_1.avif"),
      factsText: "hey",
    },
    {
      factsImg: require("../../Assets/img/laughter/laughter_utkp_1.avif"),
      factsText: "hey",
    },
    {
      factsImg: require("../../Assets/img/laughter/laughter_utkp_1.avif"),
      factsText: "hey",
    },
  ]);
  return (
    <div>
      <div className="movieFacts_main">
      <p className="moviesFacts_p">Popular Facts About Movies</p>
      <div className="movieFacts">
        {
            Moviefacts.map((moviefacts) => {
            return (
              <div class="Factscontainer_1">
                <img className="movieFacts_image" src={moviefacts.factsImg} alt="" />
                <div class="movieFacts_overlay">
                  <div class="movieFacts_text">{moviefacts.factsText}</div>
                </div>
                </div>
                );
            })
        }
        </div>
      </div>
    </div>
  );
}

export default Moviefacts;
