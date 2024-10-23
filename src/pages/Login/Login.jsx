import React, { useState } from 'react';
import './Login.css'; // Create and import your CSS file here
import TwoPeoples from "../../assets/TwoPeoples.png";
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  // Form validation logic
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or Phone Number is required';
    } else if (!emailRegex.test(formData.emailOrPhone) && !phoneRegex.test(formData.emailOrPhone)) {
      newErrors.emailOrPhone = 'Enter a valid email or phone number';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Login Successful', formData);
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Banner />
      <Navbar />
      <div className="login-container">
        <div className="image-container">
          <img
            src={TwoPeoples}
            alt="Two people interacting"
            className="login-image"
          />
        </div>

        <div className="form-container">
          <div className="formWrapper">
            <h1>Log in to Frugato</h1>
            <p>Enter your details below</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                className="form-input"
                value={formData.emailOrPhone}
                onChange={handleChange}
              />
              {errors.emailOrPhone && <p className="error-message">{errors.emailOrPhone}</p>}

              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                  name="password"
                  placeholder="Password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show eye or eye-slash icon */}
                </span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}

              <div className="loginforgot">
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
      <Footer />
    </>
  );
};

export default Login;
