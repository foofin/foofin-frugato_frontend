import React from 'react';
import './Wishlist.css';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';
import image from "../../assets/image.png"


const Wishlist = () => {
  // Sample data for wishlist items
  const wishlistItems = [
    { id: 1, name: 'Chocolate', price: 199, oldPrice: 1999, imageUrl: '/images/chocolate1.jpg' },
    { id: 2, name: 'Chocolate', price: 999, oldPrice: null, imageUrl: '/images/chocolate2.jpg' },
    { id: 3, name: 'Chocolate', price: 940, oldPrice: null, imageUrl: '/images/chocolate3.jpg' },
    { id: 4, name: 'Chocolate', price: 795, oldPrice: null, imageUrl: '/images/chocolate4.jpg' },
  ];

  const justForYouItems = [
    { id: 1, name: 'Chocolate', price: 960, rating: 5, reviews: 899, imageUrl: '/images/chocolate5.jpg' },
    { id: 2, name: 'Chocolate', price: 1099, rating: 4.5, reviews: 589, imageUrl: '/images/chocolate6.jpg' },
    { id: 3, name: 'Chocolate', price: 1140, rating: 4, reviews: 699, imageUrl: '/images/chocolate7.jpg' },
    { id: 4, name: 'Chocolate', price: 1190, rating: 5, reviews: 1000, imageUrl: '/images/chocolate8.jpg' },
  ];

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h3>Wishlist ({wishlistItems.length})</h3>
        <button className="move-all-btn">Move All to Bag</button>
      </div>

      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div className="item-image">
              <img src={image} alt={item.name} />
              <div className="wishlist-actions">
                <button className="wishlist-remove-btn">
                  <FiTrash2 size="18px" />
                </button>
              </div>
              <div className='AddToCartdiv'>
              <button className="wishlist-cart-btn">
                  <FiShoppingCart size="18px" />
                  Add to Cart
                </button>
                </div>
            </div>
            <div className="item-info">
              <p>{item.name}</p>
              <p className="item-price">
                ${item.price} {item.oldPrice && <span className="item-old-price">${item.oldPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="just-for-you">
        <div className="just-for-you-header">
          <h3>Just For You</h3>
          <button className="see-all-btn">See All</button>
        </div>

        <div className="just-for-you-items">
          {justForYouItems.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <div className="item-image">
                <img src={image} alt={item.name} />
              </div>
              <div className='AddToCartdiv'>
                  <button className="wishlist-cart-btn">
                    <FiShoppingCart size="18px" />
                    Add to Cart
                  </button>
                </div>
              <div className="item-info">
                <p>{item.name}</p>
                <p className="item-price">${item.price}</p>
                <p className="item-rating">
                  ⭐ {item.rating} ({item.reviews} reviews)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
