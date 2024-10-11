import React from 'react';
import './SignUp.css'; // Create and import your CSS file here
import TwoPeoples from "../../assets/TwoPeoples.png"

const SignUp = () => {
  return (
    <div className="signup-container">
      {/* Left side with image */}
      <div className="image-container">
        <img
          src={TwoPeoples} // Replace with the actual image URL
          alt="Two people interacting"
          className="signup-image"
        />
      </div>

      {/* Right side with form */}
      <div className="form-container">
        <div className='formWrapper'>
        <h1>Create an account</h1>
        <p>Enter your details below</p>

        <form className="signup-form">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />

          <button type="submit" className="create-account-button">
            Create Account
          </button>

          <button className="google-signup-button">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="google-icon" />
            Sign up with Google
          </button>

          <p className="login-link">
            Already have an account?    <a href="/login"><u>Log in</u></a>
          </p>
        </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
