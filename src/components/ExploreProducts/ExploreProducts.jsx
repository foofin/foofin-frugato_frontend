import React from "react";
import "./ExploreProducts.css"; // CSS for styling
import choco from "../../assets/chocolate.jpeg";

const products = [
  {
    id: 1,
    name: "Chocolate",
    price: "$100",
    originalPrice: "$130",
    rating: 4.5,
    isNew: false,
    isOnSale: false,
    image: "/path/to/image1.png",
  },
  {
    id: 2,
    name: "Chocolate",
    price: "$120",
    originalPrice: "$160",
    rating: 4.9,
    isNew: false,
    isOnSale: true,
    image: "/path/to/image2.png",
  },
  {
    id: 3,
    name: "Chocolate",
    price: "$100",
    originalPrice: "$130",
    rating: 4.6,
    isNew: false,
    isOnSale: false,
    image: "/path/to/image3.png",
  },
  {
    id: 4,
    name: "Chocolate",
    price: "$100",
    originalPrice: "$120",
    rating: 4.7,
    isNew: false,
    isOnSale: false,
    image: "/path/to/image4.png",
  },
  {
    id: 5,
    name: "Chocolate",
    price: "$150",
    originalPrice: "$200",
    rating: 4.9,
    isNew: true,
    isOnSale: true,
    image: "/path/to/image5.png",
  },
  {
    id: 6,
    name: "Chocolate",
    price: "$150",
    originalPrice: "$200",
    rating: 4.8,
    isNew: true,
    isOnSale: false,
    image: "/path/to/image6.png",
  },
  {
    id: 7,
    name: "Chocolate",
    price: "$100",
    originalPrice: "$130",
    rating: 4.7,
    isNew: false,
    isOnSale: false,
    image: "/path/to/image7.png",
  },
  {
    id: 8,
    name: "Chocolate",
    price: "$100",
    originalPrice: "$130",
    rating: 4.7,
    isNew: false,
    isOnSale: false,
    image: "/path/to/image8.png",
  },
];

const ExploreProducts = () => {
  return (
    <div className="explore-products">
      <div className="redToday">
        <div className="redBox"></div>
        <div className="Today">Our Products</div>
      </div>
      <div className="exploreTitle">
        <h2>Explore Our Products</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.isNew && <span className="badge new">New</span>}
            {product.isOnSale && <span className="badge sale">Sale</span>}
            <img src={choco} alt={product.name} className="product-image" />
            <div className="product-info">
              <div className="choconamediv"><h3>{product.name}</h3></div> 
              <div className="product-info-details">
                <div>
                  <span className="priceExplore">{product.price}</span>
                </div>
                <div className="rating">
                  {Array.from(
                    { length: Math.floor(product.rating) },
                    (_, i) => (
                      <span key={i}>⭐</span>
                    )
                  )}
                </div>
              </div>
            </div>
            {<button className="add-to-cartExplore">Add To Cart</button>}
          </div>
        ))}
      </div>
      <div className="view-all-btn-div"><button className="view-all-products-btn">View All Products</button></div>
      
    </div>
  );
};

export default ExploreProducts;
