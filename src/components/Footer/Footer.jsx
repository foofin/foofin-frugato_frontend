import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Fruogato</h4>
          <p>Get 10% off your first order</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            {/* <button type="submit">Subscribe</button> */}
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
            <li><a href="/account">My Account</a></li>
            <li><a href="/login">Login/Register</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fruogato. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
