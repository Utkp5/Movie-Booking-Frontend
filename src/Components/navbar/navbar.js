import React from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"



function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div><img className="logo" src={logoo} alt="logo" /></div>
        <div className="navbar_elements">
          <a href="/" id="a" >Home</a>
          <a href="/About" id="a" >About</a>
          <a href="/Movie" id="a" >Movies</a>
          <a href="/Contact" id="a" >Contact</a>
          <a href="/Register"   className="signin_button"><button className="navbar_button" >Sign up</button></a>
          <a href="Login"   className="signin_button"><button className="navbar_button" >Log in</button></a>

          
        </div>

      </div>
    </div>
  );
}

export default Navbar;
