import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast
import "./FlashSale.css";
import chocolate from "../../assets/chocolate.jpeg";

const FlashSale = () => {
  const [timer, setTimer] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
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
    {
      id: 1,
      name: "Chocolate",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 5,
    },
    {
      id: 2,
      name: "Chocolate",
      price: "$960",
      originalPrice: "$160",
      discount: "-35%",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Chocolate",
      price: "$90",
      originalPrice: "$160",
      discount: "-30%",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Chocolate",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Chocolate",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 4.9,
    },
  ];

  // Add this function to handle adding to cart
  const handleAddToCart = (productName) => {
    toast.success(`${productName} added to cart successfully!`, {
      position: "bottom-right", // Ensure position is correct
      autoClose: 3000,
    });
  };

  return (
    <div className="flash-sale">
      <ToastContainer /> {/* Ensure this is included */}
      <div className="redToday">
        <div className="redBox"></div>
        <div className="Today">Today's</div>
      </div>
      <div className="FlashSaleWithTimerX">
        <h2>Flash Sales</h2>
        <div className="timer">
          <div className="time-section">
            <div className="time-label">Day</div>
            <span>{String(timer.days).padStart(2, "0")}</span>
          </div>
          <div className="time-section">
            <div className="time-label">Hrs</div>
            <span>{String(timer.hours).padStart(2, "0")}</span>
          </div>
          <div className="time-section">
            <div className="time-label">Mins</div>
            <span>{String(timer.minutes).padStart(2, "0")}</span>
          </div>
          <div className="time-section">
            <div className="time-label">Secs</div>
            <span>{String(timer.seconds).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="viewAllDiv">
        <button className="view-all">View All Products</button>
      </div>
    </div>
  );
};

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to="/productdetails">
        <div className="displusimage">
          <div className="discount-tag">{product.discount}</div>
          <div>
            <img src={chocolate} alt={product.name} className="product-image" />
          </div>
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p>
            <span className="pricep">{product.price} </span>
            <span className="original-price">{product.originalPrice}</span>
          </p>
          <div className="rating">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </Link>
      <button className="add-to-carts" onClick={() => onAddToCart(product.name)}>Add To Cart</button>
    </div>
  );
};

export default FlashSale;
