import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="main">
      <div className="section">
        <img src="./main.png" alt="" />
        <div className="sub-section">
          <div className="input">
            <p className="text">ID</p>
            <input type="text" />
          </div>
          <div className="input">
            <p className="text">Password</p>
            <input type="text" />
          </div>
          <div className="remember">
            <input type="checkbox" />
            <p className="text">Remember Me</p>
          </div>

          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
