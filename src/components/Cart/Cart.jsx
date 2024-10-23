import React, { useState } from 'react';
import './Cart.css';
import chococup from "../../assets/chococup.png";
import chocojar from "../../assets/chocoJar.jpeg";
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chocolate',
      price: 850,
      quantity: 1,
      image: chococup, // Replace with actual image
    },
    {
      id: 2,
      name: 'Chocolate',
      price: 850,
      quantity: 2,
      image: chocojar, // Replace with actual image
    },
  ]);

  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedItems);
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
        <Banner/>
        <Navbar/>
        <div className="cart-container">
      <h2>Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td className="cart-product">
                <img src={item.image} alt={item.name} className="product-image" />
                {item.name}
              </td>
              <td>${item.price}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="quantity-input"
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-buttons">
        <button className="shop-btn">Return To Shop</button>
        <button className="update-btn">Update Cart</button>
      </div>

      <div className="coupon-container">
        <input type="text" placeholder="Coupon Code" className="coupon-input" />
        <button className="apply-coupon-btn">Apply Coupon</button>
      </div>
      <div className="cart-summary">
        <h3>Cart Total</h3>
        <p>Subtotal: ${getSubtotal()}</p>
        <p>Shipping: Free</p>
        <p>Total: ${getSubtotal()}</p>
        <button className="checkout-btn"><Link to="/checkout"> Proceed to checkout</Link></button>
      </div>
    </div>
    <div className='FootMarup'><Footer/></div>
    </>
    
  );
};

export default Cart;
