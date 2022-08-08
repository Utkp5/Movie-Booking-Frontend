import React, { useState, useEffect } from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"



function Navbar() {

   const [inout,setinout] = useState();
   const [inoutDirection, setDirection] = useState("/Login");
    
   useEffect(() => {
    let tokenval = localStorage.getItem("token");

    if (tokenval) {
      setinout("Logout")
      setDirection("/")
    }
    else
    {
      setinout("Login");
      setDirection("/Login");
    }
   },[])

   const Handlechange = () => {
    let tokenval = localStorage.getItem("token");
    let userEmail = localStorage.getItem("userEmail");
    if (tokenval && userEmail) {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
    }
   }


  return (
    <div>
      <div className="navbar">
        <div><img className="logo" src={logoo} alt="logo" /></div>
        <div className="navbar_elements">
          <a href="/" id="a" >Home</a>
          <a href="/About" id="a" >About</a>
          <a href="/Movie" id="a" >Movies</a>
          <a href="/Contact" id="a" >Contact</a>
          {!localStorage.getItem("token")? // ye command signup button ko hide krne ke liye hai.
          <a href="/Register"    className="signin_button"><button className="navbar_button" >Sign up</button></a>
          :null
           }
          <a href={inoutDirection}       className="signin_button"><button className="navbar_button" onClick={() => {
            Handlechange();
          }}>{inout}</button></a>

          
        </div>

      </div>
    </div>
  );
}

export default Navbar;
