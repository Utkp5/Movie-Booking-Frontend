import React from "react";
import "./signin.css";
import Navbar from "../../Components/navbar/navbar";


function Signin() {
  return (
    <div>

    <Navbar />
    <div className="signin_container">
      <div className="form">
        <h1>Welcome Back</h1>
        <div class="inset">
          <p>
            <label for="firstName">FIRST NAME</label>
            <input type="text" name="firstName" id="firstName" required />
          </p>
          <p>
            <label for="lastName">LAST NAME</label>
            <input type="text" name="lastName" id="lastName" required />
          </p>
          <p>
            <label for="email">EMAIL ADDRESS</label>
            <input type="text" name="email" id="email" required />
          </p>
          <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" id="password" required />
          </p>
          <p className="remember_p">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Remember me for 15 days</label>
          </p>
        </div>
        <p className="p-container">
          <input type="submit" name="go" id="go" value="Sign up" />
        </p>
      </div>
      </div>
    </div>
  );
}

export default Signin;
