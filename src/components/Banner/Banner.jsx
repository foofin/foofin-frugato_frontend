import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        {/* Centered content with sale text and ShopNow button */}
        <div className="center-content">
          <h1 className="sale-text">
            Festival Sale for All Chocolate And Free Express Delivery - OFF 50%!
          </h1>
          {/* <div className="shop-now">
            <h5><u>Shop Now</u></h5>
          </div> */}
        </div>
        {/* Right-aligned language select dropdown */}
        <div className="language-select">
          <span className="language-text">English</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
