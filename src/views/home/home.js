import React from "react";
import Navbar from "../../Components/navbar/navbar";
import "./home.css"
import img_1 from "../../Assets/img/banner/4.png";
import img_2 from "../../Assets/img/banner/4.png";
import img_3 from "../../Assets/img/banner/4.png";
import img_4 from "../../Assets/img/banner/4.png";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Movie_1 from "../../Components/movies/movie_1";

function Home() {
  const firstSlideShow = [img_1,img_2,img_3,img_4];
  const secondSlideShow = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1658901247645_lolaweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1654067732011_fnb_web.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1658901247645_lolaweb.jpg",
  ];
  return (
    <div>

      <Navbar />

      <Zoom scale={0.7} indicators={true}>
        {firstSlideShow.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              alt="Slide Image"
              src={each}
            />
          </div>
        ))}
      </Zoom>

      <Movie_1 />

      <Zoom scale={0.7} indicators={true}>
        {secondSlideShow.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              alt="Slide Image"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default Home;
