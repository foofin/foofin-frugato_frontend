import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="FooterContainer">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Fruogato</h4>
              <p>Get 10% off your first order</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
              </form>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <p>Email: support@fruogato.com</p>
              <p>Phone: +123-456-7890</p>
            </div>
            <div className="footer-column">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="/my-account">My Account</a>
                </li>
                <li>
                  <a href="/login">Login/Register</a>
                </li>
                <li>
                  <a href="/cart">Cart</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
            <h4>Download App</h4>
              <ul>
                <li>
                  <h6>save $3 with app new user only</h6>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="footer-bottom">
            <p>&copy; 2024 Fruogato. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
