import React, { useState } from 'react';
import 'react-phone-number-input/style.css'; // Import CSS for phone number input
import PhoneInput from 'react-phone-number-input';
import './Login.css';
import TwoPeoples from '../../assets/TwoPeoples.png';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[+]*[91]{2}[0-9]{10}$/; // Adjusted regex for country code

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid phone number of 10 digits';
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
      toast.success('Login successful!'); // Show success toast
      setTimeout(() => {
        navigate('/'); // Redirect after 3 seconds
      }, 3000);
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
          <img src={TwoPeoples} alt="Two people interacting" className="login-image" />
        </div>

        <div className="form-container">
          <div className="formWrapper">
            <h1>Log in to Frugato</h1>
            <p>Enter your details below</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <PhoneInput
                defaultCountry="IN"
                international
                countryCallingCodeEditable={false}
                placeholder="Phone Number"
                className="form-input phone-input"
                value={formData.phoneNumber}
                onChange={(value) => setFormData({ ...formData, phoneNumber: value })}
                countries={['IN']}
              />
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}

              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="form-input"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}

              <div className="loginforgot">
                <button type="submit" className="loginbutton">
                  Login
                </button>
                <p className="loginlink">Forgot Password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer */}
      <Footer />
    </>
  );
};

export default Login;
