import React, { useState } from 'react';
import './SignUp.css';
import TwoPeoples from "../../assets/TwoPeoples.png";
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\+91[0-9]{10}$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number starting with +91';
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
      // Assuming signup is successful
      toast.success('Signed up successfully!'); // Show success notification
      setTimeout(() => {
        navigate('/login'); // Redirect to login after 3 seconds
      }, 3000);
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
      <ToastContainer /> {/* Include ToastContainer for notifications */}
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

              <PhoneInput
                international
                defaultCountry="IN"
                countryCallingCodeEditable={false}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                countries={['IN']}
                className="form-input phone-input"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}

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
