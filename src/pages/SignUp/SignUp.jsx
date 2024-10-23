import React, { useState } from 'react';
import './SignUp.css';
import TwoPeoples from "../../assets/TwoPeoples.png";
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = 'Email or Phone Number is required';
    } else if (!emailRegex.test(formData.emailOrPhone) && !phoneRegex.test(formData.emailOrPhone)) {
      newErrors.emailOrPhone = 'Enter a valid email or phone number';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData);
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <Banner />
      <Navbar />
      <div className="signup-container">
        <div className="image-container">
          <img
            src={TwoPeoples}
            alt="Two people interacting"
            className="signup-image"
          />
        </div>

        <div className="form-container">
          <div className="formWrapper">
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}

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
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}

              <button type="submit" className="create-account-button">
                Create Account
              </button>

              <button className="google-signup-button">
                {/* <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="Google" className="google-icon" /> */}
                Sign up with Google
              </button>

              <p className="login-link">
                Already have an account? <Link to="/login"><u>Log in</u></Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
