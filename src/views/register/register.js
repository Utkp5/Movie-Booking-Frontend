import React,{useState} from "react";
import "./register.css";
import Navbar from "../../Components/navbar/navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

  const[firstName,setfirstname] = useState();
  const[lastName,setlastname] = useState();
  const[userEmail,setuseremail] = useState();
  const[password,setpassword] = useState();

  const Handlesubmit = async () => {
    const user = {
      firstName,
      lastName,
      userEmail,
      password,
    };
    await axios.post("https://moviebooking-utkarsh.herokuapp.com/api/register",user).then(function (response) {
      
      if (response.data) {
        toast.success("Registered Successfully");
        window.location.href = "/Login";
      }
      

    }).catch(function (error) {
      toast.warning("Something Went Wrong!");
      console.log(error);
    });      
  }
  return (
    <div className="register_container">
      <Navbar />

        
        <div className="form">
          <h1>Welcome Back</h1>
          <div class="inset">
            <p className="register_p">
              <label for="firstName">FIRST NAME</label>
              <input type="text" name="firstName" id="firstName"  onChange={(e) => {
                setfirstname(e.target.value);
              }}/>
            </p>
            <p className="register_p">
              <label for="lastName">LAST NAME</label>
              <input type="text" name="lastName" id="lastName"  onChange={(e) => {
                setlastname(e.target.value);
              }}/>
            </p>
            <p className="register_p">
              <label for="email">EMAIL ADDRESS</label>
              <input type="text" name="email" id="email" onChange={(e) => {
                setuseremail(e.target.value);
              }} />
            </p>
            <p className="register_p">
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
          <a href="#"><span>Forgot password ?</span></a>
          <input type="submit" name="go" id="go" value="Sign up" onClick={() => {
            Handlesubmit();
          }}/>
          </p>
        </div>


      <ToastContainer />

    </div>
  );
}

export default Register;
