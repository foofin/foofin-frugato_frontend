import React, { useState, useEffect } from 'react';
import './PromotionBanner.css'; // CSS for styling
import chocolateBar from "../../assets/chocolateBar.jpeg"

const PromotionBanner = () => {
  const [timer, setTimer] = useState({
    days: 1,
    hours: 12,
    minutes: 45,
    seconds: 30,
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

  return (
    <div className="promotion-banner">
      <div className="promo-text">
        <div className='Categories'>Categories</div>
        <div className='texts'>
        <h2>Enhance Your</h2>
        <h2> Taste Experience</h2>
        </div>
        
        <div className="promo-timer">
          <div className="circle">
            <span>{String(timer.days).padStart(2, '0')}</span>
            <p>Days</p>
          </div>
          <div className="circle">
            <span>{String(timer.hours).padStart(2, '0')}</span>
            <p>Hours</p>
          </div>
          <div className="circle">
            <span>{String(timer.minutes).padStart(2, '0')}</span>
            <p>Minutes</p>
          </div>
          <div className="circle">
            <span>{String(timer.seconds).padStart(2, '0')}</span>
            <p>Seconds</p>
          </div>
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>
      <img src={chocolateBar} alt="Chocolate Promo" className="promo-image" />
    </div>
  );
};

export default PromotionBanner;
