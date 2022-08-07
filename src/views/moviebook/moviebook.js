import React from 'react'
import "./moviebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Moviebook() {

    const[Moviebook,setMoviebook] = useState({})
    const[alert,setalert] = useState(false);
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
            <div className='movie-book-div2'>
                <p className="movie-book-p" >{Moviebook.movieName}</p>
                <p className="movie-book-p1" >{Moviebook.language} . {Moviebook.genres} . {Moviebook.year}</p>
                <p className="movie-book-p2" >{Moviebook.time}</p>
                <div className='movie-book-button-div'>
                <button className='movie-book-button' onClick={() => setalert(!alert)
                  `${alert ? toast.warning(" You have Already Booked Your Movie") : toast.success("Movie Booked Successfully")}`
                }>
                Proceed To Book</button>
                </div>
            </div>
        </div>

      <ToastContainer />

    </div>
  )
}

export default Moviebook