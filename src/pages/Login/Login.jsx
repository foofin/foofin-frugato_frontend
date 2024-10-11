import React from 'react';
import './Login.css'; // Create and import your CSS file here
import TwoPeoples from "../../assets/TwoPeoples.png"

const Login = () => {
  return (
    <div className="login-container">
      {/* Left side with image */}
      <div className="image-container">
        <img
          src={TwoPeoples} // Replace with the actual image URL
          alt="Two people interacting"
          className="login-image"
        />
      </div>

      {/* Right side with form */}
      <div className="form-container">
        <div className='formWrapper'>
        <h1>Log in to Frugato</h1>
        <p>Enter your details below</p>

        <form className="login-form">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
        <div className='loginforgot'>
        <button type="submit" className="loginbutton">
            Login
          </button>


          <p className="loginlink">
            Forgot Password?
          </p>
        </div>
          
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
