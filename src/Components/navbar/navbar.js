import React, { useState, useEffect } from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {

   const [inout,setinout] = useState();
   const [menu,setmenu] = useState(false);
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
    if (tokenval) {
      localStorage.removeItem("token");
    }
   }




  return (
    <div>
      <div className="navbar">

          <div><img className="logo" src={logoo} alt="logo" /></div>

              <ul className={menu ? 'navbar_mobile_css' : 'navbar_ul'}>
                 <li><NavLink to="/" id="a" >Home</NavLink></li>
                 <li><NavLink to="/About" id="a" >About</NavLink></li>
                 {! localStorage.getItem("token") ?  null : <li><NavLink to="/Movie" id="a" >Movies</NavLink></li>   }
                 <li><NavLink to="/Contact" id="a" >Contact</NavLink></li>
                 {!localStorage.getItem("token")? // ye command signup button ko hide krne ke liye hai.
                 <li><NavLink to="/Register"    className="signin_button"><button className="navbar_button" >Sign up</button></NavLink></li>
                 :null
                 }
                 <li><NavLink to={inoutDirection} className="signin_button"><button className="navbar_button" onClick={() => {
                   Handlechange();
                 }}>{inout}</button></NavLink></li>
                 </ul>
                 <div className="menu_icon" onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={26} color="white"/> :<HiMenu size={26} color="white"/>}
                 </div> 
           
      </div>
    </div>
  );
}

export default Navbar;
