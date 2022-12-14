import React,{useEffect, useState} from "react";
import "./login.css";
import Navbar from "../../Components/navbar/navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {

  const [userEmail,setuseremail] = useState();
  const [password,setpassword] = useState();

  const Handlelogin = async () => {
    const user = {
      userEmail,
      password,
    };
    await axios.post("https://moviebooking-utkarsh.herokuapp.com/api/Login",user).then(function (response) {


      console.log(response.data.userid);
      if (response.data.token) {
        localStorage.setItem("token",response.data.token);
        toast.success("Login Successfully");
        localStorage.setItem("userid",response.data.userid);
        window.location.href = "/Movie";
      }

    }).catch(function (error) {
      toast.warning("Invalid Credentials!");
      
    });
  }

  



  return (
    <div>
      <Navbar />

      <div className="signin_container">

        <div className="login_form">
          <h1>Welcome Back</h1>
          <div class="inset">
            
            <p>
              <label for="email">EMAIL ADDRESS</label>
              <input type="text" name="email" id="email" onChange={(e) =>{
                setuseremail(e.target.value);
              }} />
            </p>
            <p>
              <label for="password">PASSWORD</label>
              <input type="password" name="password" id="password" onChange={(e) => {
                setpassword(e.target.value);
              }} />
            </p>
            <p className="remember_p">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">Remember me for 15 days</label>
            </p>
          </div>
          <p className="p-container">
            <a href=""><span>Forgot password ?</span></a>
            <input type="submit" name="go" id="go" value="Login" onClick={() => {
              Handlelogin();
            }}/>
          </p>
        </div>
        
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signin;
