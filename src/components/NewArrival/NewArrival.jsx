import React from 'react';
import './NewArrival.css'; // CSS for styling
import Dark from "../../assets/DarkBlackChocolate.jpeg"
import woman from "../../assets/woman.jpeg"
import chocolate from "../../assets/chocolate.jpeg"

const NewArrival = () => {
  return (
    <div className="new-arrival-section">
      {/* <h1></h1> */}
        <div className='redToday'>
       <div className='redBox'></div>
       <div className='Today'>Featured </div>
       </div>
      <h2 className="section-title">New Arrival</h2>
      <div className="featured-products">
        <div className="large-card">
          <img src={Dark} alt="Darkline Chocolate" />
          <div className="overlay">
            <h3>Darkline Chocolate</h3>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
        <div className="small-cards">
          <div className="small-card">
            <img src={woman} alt="Women's Chocolate Collection" />
            <div className="overlay">
              <h3>Women's Chocolate Collection</h3>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
          <div className="small-card-grid">
            <div className="small-card">
              <img src={chocolate} alt="Chocolate 1" />
              <div className="overlay">
                <h3>Chocolate 1</h3>
                <button className="shop-now-btn">Shop Now</button>
              </div>
            </div>
            <div className="small-card">
              <img src={chocolate} alt="Chocolate 2" />
              <div className="overlay">
                <h3>Chocolate 2</h3>
                <button className="shop-now-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
