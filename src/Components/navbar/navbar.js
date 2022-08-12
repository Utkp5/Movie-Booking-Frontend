import React, { useState, useEffect } from "react";
import "./navbar.css";
import logoo from "../../Assets/img/logo.png"
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

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
                 <li><a href="/" id="a" >Home</a></li>
                 <li><a href="/About" id="a" >About</a></li>
                 {! localStorage.getItem("token") ?  null : <li><a href="/Movie" id="a" >Movies</a></li>   }
                 <li><a href="/Contact" id="a" >Contact</a></li>
                 {!localStorage.getItem("token")? // ye command signup button ko hide krne ke liye hai.
                 <li><a href="/Register"    className="signin_button"><button className="navbar_button" >Sign up</button></a></li>
                 :null
                 }
                 <li><a href={inoutDirection} className="signin_button"><button className="navbar_button" onClick={() => {
                   Handlechange();
                 }}>{inout}</button></a></li>
                 </ul>
                 <div className="menu_icon" onClick={() => setmenu(!menu)}>
                    {menu ? <HiX size={26} color="white"/> :<HiMenu size={26} color="white"/>}
                 </div> 
           
      </div>
    </div>
  );
}

export default Navbar;
