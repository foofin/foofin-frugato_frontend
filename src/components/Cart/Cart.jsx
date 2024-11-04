import React, { useState } from 'react';
import './Cart.css';
import chococup from "../../assets/chococup.png";
import chocojar from "../../assets/chocoJar.jpeg";
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chocolate',
      price: 850,
      quantity: 1,
      image: chococup, 
    },
    {
      id: 2,
      name: 'Chocolate',
      price: 850,
      quantity: 2,
      image: chocojar, 
    },
  ]);

  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const navigate = useNavigate();

  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedItems);
  };

  const incrementQuantity = (id) => {
    const updatedItems = cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getTotalWithDiscount = () => {
    const subtotal = getSubtotal();
    return isDiscountApplied ? subtotal * 0.95 : subtotal;
  };

  const handleMumbaiDiscount = (isFromMumbai) => {
    if (isFromMumbai) {
      setIsDiscountApplied(true);
      toast.success("5% discount applied!");
    } else {
      toast.info("No discount applied.");
    }

    setTimeout(() => {
      navigate('/checkout');
    }, 3000); // Redirect after 3 seconds
  };

  const handleCheckoutClick = () => {
    toast(
      ({ closeToast }) => (
        <div className="popup-content">
          <p className="popup-question">
            Are you from Mumbai? 🎉
          </p>
          <div className="popup-buttons">
            <button 
              className="popup-btn yes-btn"
              onClick={() => { handleMumbaiDiscount(true); closeToast(); }}
            >
              Yes
            </button>
            <button 
              className="popup-btn no-btn"
              onClick={() => { handleMumbaiDiscount(false); closeToast(); }}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
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
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => decrementQuantity(item.id)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="quantity-input"
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    />
                    <button className="quantity-btn" onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-summary">
          <h3>Cart Total</h3>
          <p>Subtotal: ${getSubtotal()}</p>
          <p>Shipping: Free</p>
          <p>Discount Applied: {isDiscountApplied ? "5%" : "None"}</p>
          <p>Total: ${getTotalWithDiscount().toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckoutClick}>
            Proceed to checkout
          </button>
        </div>
      </div>
      <div className='FootMarup'><Footer/></div>

      <ToastContainer />
    </>
  );
};

export default Cart;
