import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".account-btn")) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>Frugato</p>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
          {/* <a href="/"></a> */}
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <div className="search-bar">
          <div>
            <input type="text" placeholder="What are you looking for?" />
          </div>
          <div className="searchDiv">
            <FiSearch size="15px" className="icon" />
          </div>
        </div>
        <div className="TwoIcons">
          <FiHeart size="15px" className="iconH" />
          <Link to="/cart">
            <FiShoppingCart size="15px" className="iconC" />
          </Link>
        </div>

        {/* Account Icon with Dropdown */}
        <div className="account-btn" onClick={toggleDropdown}>
          <FiUser size="20px" className="iconA" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/account">Manage My Account</Link>
              <a href="#">My Orders</a>
              <a href="#">My Cancellations</a>
              <a href="#">My Reviews</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
