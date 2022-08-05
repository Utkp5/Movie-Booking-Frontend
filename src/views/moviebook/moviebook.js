import React from 'react'
import "./moviebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Moviebook() {

    const[Moviebook,setMoviebook] = useState({})
    const{movieid} = useParams();

    useEffect(() => {
        axios.defaults.headers = {
          auth: localStorage.getItem("token"),
        };
        async function fetchData() {
          try {
            const data = (
              await axios.get(`http://localhost:5000/api/movies/findmovies/${movieid}`, {})).data;
            setMoviebook(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
    



  return (
    <div className='return_div_moviebook'>
        <div className='movie-book-flex'>
            <div>
            <img className='movie-book-card-img' src={Moviebook.movielbImg} alt="" />
            </div> 
            <div>
                <p className="movie-book-p" >{Moviebook.movieName}</p>
                <p className="movie-book-p" >{Moviebook.language} . {Moviebook.genres} . {Moviebook.year}</p>
            </div>
        </div>
    </div>
  )
}

export default Moviebook