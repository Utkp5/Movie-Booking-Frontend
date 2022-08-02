import React,{useState} from "react";
import "./login.css";
import Navbar from "../../Components/navbar/navbar";
import axios from "axios";

function Signin() {

  const [userEmail,setuseremail] = useState();
  const [password,setpassword] = useState();

  const Handleregister = async () => {
    const user = {
      userEmail,
      password,
    };
    await axios.post("http://localhost:5000/api/signin",user).then(function (response) {

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

      <div className="signin_container">

        <div className="form">
          <h1>Welcome Back</h1>
          <div class="inset">
            
            <p>
              <label for="email">EMAIL ADDRESS</label>
              <input type="text" name="email" id="email" onChange={(e) =>{
                setuseremail(e.target.value);
              }} required />
            </p>
            <p>
              <label for="password">PASSWORD</label>
              <input type="password" name="password" id="password" onChange={(e) => {
                setpassword(e.target.value);
              }} required />
            </p>
            <p className="remember_p">
              <input type="checkbox" name="remember" id="remember" />
              <label for="remember">Remember me for 15 days</label>
            </p>
          </div>
          <p className="p-container">
            <a href=""><span>Forgot password ?</span></a>
            <input type="submit" name="go" id="go" value="Login" onClick={() => {
              Handleregister();
            }}/>
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Signin;
