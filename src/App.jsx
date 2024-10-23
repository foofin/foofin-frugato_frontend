import { useState } from 'react'
import './App.css'

import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Cart from './components/Cart/Cart';
import Checkoutpage from './pages/CheckoutPAge';
import EditProfile from './pages/EditProfile/EditProfile';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProductDetails from './pages/ProductDetails/ProductDetails';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkoutpage/>}/>
        <Route path="/account" element={<EditProfile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productDetails" element={<ProductDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App



