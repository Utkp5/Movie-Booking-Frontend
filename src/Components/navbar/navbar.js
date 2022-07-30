import React from "react";
import "./navbar.css";




function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">logo</div>
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
