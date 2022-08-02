import React,{useState} from "react";
import "./register.css";
import Navbar from "../../Components/navbar/navbar";
import axios from "axios";

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
    await axios.post("http://localhost:5000/api/register",user).then(function (response) {
      
      if (response.data.token) {
        localStorage.setItem("token",response.data.token);
      }

    }).catch(function (error) {
      console.log(error);
    });      
  }
  return (
    <div>
      <Navbar />

      <div className="register_container">

        <div className="form">
          <h1>Welcome Back</h1>
          <div class="inset">
            <p>
              <label for="firstName">FIRST NAME</label>
              <input type="text" name="firstName" id="firstName"  onChange={(e) => {
                setfirstname(e.target.value);
              }}/>
            </p>
            <p>
              <label for="lastName">LAST NAME</label>
              <input type="text" name="lastName" id="lastName"  onChange={(e) => {
                setlastname(e.target.value);
              }}/>
            </p>
            <p>
              <label for="email">EMAIL ADDRESS</label>
              <input type="text" name="email" id="email" onChange={(e) => {
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
          <input type="submit" name="go" id="go" value="Sign up" onClick={() => {
            Handlesubmit();
          }}/>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Register;
