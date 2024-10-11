import React from 'react';
import './BestSellingProduct.css'; // CSS for styling
import bestSellingimg from "../../assets/chocolate.jpeg";

const products = [
  { id: 1, name: 'Chocolate', price: '$120', originalPrice: '$160', rating: 5 },
  { id: 2, name: 'Chocolate', price: '$90', originalPrice: '$160', rating: 4.8 },
  { id: 3, name: 'Chocolate', price: '$90', originalPrice: '$160', rating: 4.8 },
  { id: 4, name: 'Chocolate', price: '$375', originalPrice: '$400', rating: 4.9 }
];

const BestSellingProducts = () => {
  return (
    <div className="best-selling-products">
      <div className='redToday'>
       <div className='redBox'></div>
       <div className='Today'>This Month</div>
       </div>
      <div className="title">
        <h2>Best Selling Products</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={bestSellingimg} alt={product.name} className="product-image" />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
