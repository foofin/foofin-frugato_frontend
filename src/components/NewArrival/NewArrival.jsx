import React from "react";
import "./NewArrival.css"; // CSS for styling
import Dark from "../../assets/DarkBlackChocolate.jpeg";
import woman from "../../assets/woman.jpeg";
import chocolate from "../../assets/chocolate.jpeg";

const NewArrival = () => {
  return (
    <div className="new-arrival-section">
      <div className="featured-head">
        <div className="redBox"></div>
        <div style={{ color: "#DB4444", fontWeight: "bolder" }}>Featured</div>
      </div>
      <div className="newArrivalDivghg">
        <h2 className="section-titledd" style={{ color: "black" }}>
          New Arrival
        </h2>
      </div>

      <div className="featured-products">
        <div className="large-card">
          <img
            src={Dark}
            style={{ height: "400px" }}
            alt="Darkline Chocolate"
          />
          <div className="overlay">
            <h3>Darkline Chocolate</h3>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
        <div className="small-cards" style={{ width: "600px" }}>
          <div className="small-card">
            <img src={woman} alt="Women's Chocolate Collection" />
            <div className="overlay">
              <h3>Women's Chocolate Collection</h3>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              width: "100%",
              height: "240px",
            }}
          >  
            <div></div>
            <img src={Dark} style={{ width: "100%" }} />
            <img src={chocolate} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
