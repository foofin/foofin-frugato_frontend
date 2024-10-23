import React, { useState } from "react";
import "./ProductDetails.css";
import pilechoco from "../../assets/pileofchoco.jpeg"

const ProductDetails = () => {
  const [selectedWeight, setSelectedWeight] = useState("1kg");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const relatedItems = [
    { id: 1, name: "Chocolate", price: 190, oldPrice: 200, discount: "5%", rating: 4.5, image: "image-url-1" },
    { id: 2, name: "Chocolate", price: 170, oldPrice: 190, discount: "10%", rating: 4.3, image: "image-url-2" },
    { id: 3, name: "Chocolate", price: 150, oldPrice: 180, discount: "15%", rating: 4.2, image: "image-url-3" },
    { id: 4, name: "Chocolate", price: 160, oldPrice: 190, discount: "12%", rating: 4.6, image: "image-url-4" }
  ];

  return (
    <div className="product-details">
      <div className="breadcrumb">Home / Chocolates / Dark Chocolate</div>

      <div className="product-container">
        <div className="product-images">
          <img className="main-image" src={pilechoco} alt="Main" />
          <div className="image-thumbnails">
            <img src={pilechoco} alt="thumb1" />
            <img src={pilechoco} alt="thumb2" />
            <img src={pilechoco} alt="thumb3" />
            <img src={pilechoco} alt="thumb4" />
          </div>
        </div>

        <div className="product-info">
          <h1>Dark Chocolate</h1>
          <div className="rating">
            ★★★★☆ <span>(100 reviews)</span>
          </div>
          <div className="price">
            <span className="current-price">$192.00</span>
            <span className="in-stock">In Stock</span>
          </div>
          <p className="description">
            Dark Chocolate with crispy chunks and amazing taste. Indulge in a bittersweet chocolate delight that's loved by all ages.
          </p>

          <div className="option-selectors">
            <div className="colors">
              <span>Colours:</span>
              <div className="color-options">
                <button onClick={() => handleColorChange("black")} className={selectedColor === "black" ? "selected" : ""}>Black</button>
                <button onClick={() => handleColorChange("red")} className={selectedColor === "red" ? "selected" : ""}>Red</button>
                <button onClick={() => handleColorChange("yellow")} className={selectedColor === "yellow" ? "selected" : ""}>Yellow</button>
              </div>
            </div>

            <div className="weight">
              <span>Weight:</span>
              <div className="weight-options">
                <button onClick={() => handleWeightChange("1kg")} className={selectedWeight === "1kg" ? "selected" : ""}>1kg</button>
                <button onClick={() => handleWeightChange("2kg")} className={selectedWeight === "2kg" ? "selected" : ""}>2kg</button>
              </div>
            </div>

            <div className="quantity">
              <span>Quantity:</span>
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <div className="actions">
              <button className="buy-now">Buy Now</button>
              <button className="add-to-cart">Add to Cart</button>
              <button className="wishlist">♡</button>
            </div>
          </div>

          <div className="delivery-info">
            <div>
              <strong>Free Delivery</strong> Enter your postal code for delivery availability.
            </div>
            <div>
              <strong>Instant Delivery</strong> Free 2-hour delivery for orders above $50.
            </div>
          </div>
        </div>
      </div>

      <div className="related-items">
        <h2>Related Items</h2>
        <div className="items">
          {relatedItems.map((item) => (
            <div className="related-item" key={item.id}>
              <img src={pilechoco} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">
                <span className="current-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </p>
              <p className="rating">★ {item.rating}</p>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
