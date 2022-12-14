import React from 'react'
import "./moviebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function Moviebook() {
    
    const[Moviebook,setMoviebook] = useState({})
    const[mprice,setmprice] = useState({price: "Rs.99 Only"});
    const [disable, setDisable] = useState(false);
    const{movieid} = useParams();

    useEffect(() => {
        axios.defaults.headers = {
          auth: localStorage.getItem("token"),
        };
        async function fetchData() {
          try {
            const data = (
              await axios.get(`https://moviebooking-utkarsh.herokuapp.com/api/movies/findmovies/${movieid}`, {})).data;
            setMoviebook(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);


      async function handleBooking()
      {

          const userId = {id : localStorage.getItem("userid")}
          console.log(userId);
          await axios.post(`https://moviebooking-utkarsh.herokuapp.com/api/Moviebook/${movieid}`,userId).then(function (response)
      {
        if(response.data)
        {
            Swal.fire({
              title: 'Are you sure?',
              text: "You Want to Proceed With the Payment",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'No,Cancel!',
              confirmButtonText: 'Yes,Go ahead'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/Payment"
              }
            })
        }
        // window.location.href = "/Payment"
      }).catch(function (error)
      {
        console.log(error);
      })
  }

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
                <p className="movie-book-p2" >{mprice.price}</p>
                <div className='movie-book-button-div'>
                <button className='movie-book-button' disabled={disable} onClick={() => {handleBooking(); setDisable(true)}}>
                Proceed To Book</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Moviebook