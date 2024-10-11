import React from 'react'
import "./Navbar.css"
import {FiSearch,FiHeart,FiShoppingCart} from 'react-icons/fi';

const Navbar = () => {
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
        
      </div>
    </nav>
  )
}

export default Navbar
