import React from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"



function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div><img className="logo" src={logoo} alt="" /></div>
        <div className="navbar_elements">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Movies</a>
          <a href="">Contact</a>
          <button className="navbar_button" >Sign in</button>
          <button className="navbar_button" >Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
