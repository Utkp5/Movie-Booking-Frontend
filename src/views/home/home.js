import React from "react";
import Navbar from "../../Components/navbar/navbar";
import "./home.css";
import img_1 from "../../Assets/img/banner/img1.jpg";
import img_2 from "../../Assets/img/banner/img2.jpg";
import img_3 from "../../Assets/img/banner/img3.jpg";
import img_4 from "../../Assets/img/banner/4.png";
import laughterBanner from "../../Assets/img/laughter/laughter_utkp_banner.avif";
import rupayBanner from "../../Assets/img/banner/rupay.avif";
import discount from "../../Assets/img/banner/discount.avif";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Movie_1 from "../../Components/movies/movie_1";
import Popularevent from "../../Components/movies/popularevent";

function Home() {
  const firstSlideShow = [img_1, img_2, img_3, img_4];
  const secondSlideShow = [
    discount,
  ];
  return (
    <div className="home_return_div">
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
      <img className="laughter_banner" src={laughterBanner} alt="" />
        <Popularevent />
        <img className="rupay_banner" src={rupayBanner} alt="" />
    </div>
  );
}

export default Home;
