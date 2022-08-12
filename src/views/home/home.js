import React from "react";
import Navbar from "../../Components/navbar/navbar";
import "./home.css";
import img_1 from "../../Assets/img/banner/img1.png";
import img_2 from "../../Assets/img/banner/img2.jpg";
import img_3 from "../../Assets/img/banner/img3.jpg";
import laughterBanner from "../../Assets/img/laughter/laughter_utkp_banner.avif";
import rupayBanner from "../../Assets/img/banner/rupay.avif";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import Movie_1 from "../../Components/movies/movie_1";
import Popularevent from "../../Components/movies/popularevent";
import Moviefacts from "../../Components/movies/moviefacts";
import MovieSecond from "../../Components/movies/movie_2";
import Footer from "../../Components/footer/footer";

function Home() {
  const firstSlideShow = [img_1, img_2, img_3];
  const secondSlideShow = [
    "https://img.freepik.com/premium-vector/cinema-poster-night-film-movies-popcorn-retro-movie-posters-template-illustration-set_102902-1871.jpg?w=2000",
    "https://asicsulb.org/corporate/images/connect/beachfront/2018-03/Movies-on-the-House.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/000/540/684/small/Cinema_banner_alphabet_sign_marquee_light_bulb_vintage_carnival_or_circus_style__Vector_illustration.jpg"
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

      <MovieSecond />

      <Moviefacts />

      <Footer />
      
    </div>
  );
}

export default Home;
