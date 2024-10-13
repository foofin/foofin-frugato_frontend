import React, { useState } from 'react';
import './Navbar.css';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest('.account-btn')) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>Frugato</p>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
      <div className="nav-icons">
        <div className="search-bar">
          <div><input type="text" placeholder="What are you looking for?" /></div>
          <div className='searchDiv'><FiSearch size="15px" className="icon"/></div>
        </div>
        <div className='TwoIcons'>
          <FiHeart size="15px" className="iconH" />
          <FiShoppingCart size="15px" className="iconC" />
        </div>

        {/* Account Icon with Dropdown */}
        <div className="account-btn" onClick={toggleDropdown}>
          <FiUser size="20px" className="iconA" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#">Manage My Account</a>
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
