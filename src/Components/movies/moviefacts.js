import React, { useState } from "react";
import "./moviefacts.css";


function Moviefacts() {
  const [Moviefacts, setMoviefacts] = useState([
    {
      factsImg: require("../../Assets/img/facts/milkha singh.webp"),
      factsText: "Milkha Singh challenged Farhan Akhtar for a race when they met for the first time before they began shooting for Bhaag Milkha Bhaag.",
    },
    {
      factsImg: require("../../Assets/img/facts/dabangg.webp"),
      factsText: "Dabangg 2 was Salman Khan's first sequel in 23 years.",
    },
    {
      factsImg: require("../../Assets/img/facts/kha no pyaar hai.jpg"),
      factsText: "Kaho Naa.. Pyar Hai was added to the Guinness Book of World Records 2002 edition for winning the most number of awards for a movie. The movie won a total of 92 awards.",
    },
    {
      factsImg: require("../../Assets/img/facts/lagaan.jpg"),
      factsText: "The maximum number of British actors ever to be cast in a single movie in the history of Bollywood cinema.",
    },
    {
      factsImg: require("../../Assets/img/facts/RRR.jpg"),
      factsText: "RRR is the third highest-grossing Indian film, the second highest-grossing film in India, the second highest-grossing Telugu film, and the tenth highest-grossing film worldwide.",
    },
    {
      factsImg: require("../../Assets/img/facts/kgf.jpg"),
      factsText: "Kolar Gold Fields was once the largest gold producing mines in Asia. The mines were, however, shut down in 2001 for a decrease in gold production, along with increasing production costs.",
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
