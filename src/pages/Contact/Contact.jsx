import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'phone') {
      setPhoneError('');
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!validatePhoneNumber(form.phone)) {
      setPhoneError("Please enter a valid phone number (10 digits).");
      return;
    }

    console.log('Form data:', form);
    // Add your form submission logic here
  };

  return (
    <>
      <Banner />
      <Navbar />
      <div className="contact-page" style={{ padding: '3rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="contact-info" style={{ width: '35%', paddingRight: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0.5rem' }} />
                Call To Us
              </h3>
              <p>We are available 24/7, 7 days a week</p>
              <p style={{ fontWeight: 'bold' }}>Phone: +908977777222</p>
            </div>

            {/* Line Separator */}
            <div className="separator" />

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem' }} />
                Write To Us
              </h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p style={{ fontWeight: 'bold' }}>Email: support@fugasoft.com</p>
            </div>
          </div>

          <div className="contact-form" style={{ width: '60%' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="flex-inputs" style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0', marginRight: '1rem' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0', marginRight: '1rem' }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f0f0f0' }}
                />
              </div>
              {phoneError && (
                <p style={{ color: 'red', marginTop: '-2rem', marginLeft: '30rem' }}>{phoneError}</p>
              )}

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                style={{ padding: '0.8rem', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '1.5rem', backgroundColor: '#f0f0f0' }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: '#ff4b4b',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  alignSelf: 'flex-end'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
