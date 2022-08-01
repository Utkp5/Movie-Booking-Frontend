import React from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"



function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div><img className="logo" src={logoo} alt="logo" /></div>
        <div className="navbar_elements">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Movie">Movies</a>
          <a href="/Contact">Contact</a>
          <a href="/Signin" className="signin_button"><button className="navbar_button" >Sign in</button></a>
          <a href="Login" className="signin_button"><button className="navbar_button" >Log in</button></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
