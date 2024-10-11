import React, { useState, useEffect } from 'react';
import './FlashSale.css'; // You can create a CSS file for styling.
import chocolate from "../../assets/chocolate.jpeg";

const FlashSale = () => {
  const [timer, setTimer] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // You can add logic here to decrease the timer values.
      // For simplicity, we're just decrementing seconds
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    { id: 1, name: 'Chocolate', price: '$120', originalPrice: '$160', discount: '-40%', rating: 5 },
    { id: 2, name: 'Chocolate', price: '$960', originalPrice: '$160', discount: '-35%', rating: 4.8 },
    { id: 3, name: 'Chocolate', price: '$90', originalPrice: '$160', discount: '-30%', rating: 4.8 },
    { id: 4, name: 'Chocolate', price: '$375', originalPrice: '$400', discount: '-25%', rating: 4.9 },
    { id: 5, name: 'Chocolate', price: '$375', originalPrice: '$400', discount: '-25%', rating: 4.9 },
  ];

  return (
    <div className="flash-sale">
       <div className='redToday'>
       <div className='redBox'></div>
       <div className='Today'>Today's</div>
       </div>
      <div className='FlashSaleWithTimer'>
      <h2>Flash Sales</h2>
      <div className="timer">
        <span>{String(timer.days).padStart(2, '0')} : </span>
        <span>{String(timer.hours).padStart(2, '0')} : </span>
        <span>{String(timer.minutes).padStart(2, '0')} : </span>
        <span>{String(timer.seconds).padStart(2, '0')}</span>
      </div>
      </div>
      
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className='viewAllDiv'>
      <button className="view-all">View All Products</button>
      </div>
      
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <div className="product-card">
      <div className="discount-tag">{product.discount}</div>
      <img src={chocolate} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>
          <span className="price">{product.price}</span>
          <span className="original-price">{product.originalPrice}</span>
        </p>
        <div className="rating">
          {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default FlashSale;
