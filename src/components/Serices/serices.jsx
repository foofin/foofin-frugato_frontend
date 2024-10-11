import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faTruck, faHeadset, faSyncAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icons

const Services = () => {
  return (
    <div>
      <div className="service-section">
        {/* Free and Fast Delivery */}
        <div className="service">
          <FontAwesomeIcon icon={faTruck} size="2x"/> {/* Truck icon */}
          <h4>Free and Fast Delivery</h4>
          <p>Free shipping on orders over $50</p>
        </div>
        
        {/* 24/7 Customer Service */}
        <div className="service">
          <FontAwesomeIcon icon={faHeadset} size="2x" /> {/* Headset icon */}
          <h4>24/7 Customer Service</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        
        {/* Money Back Guarantee */}
        <div className="service">
          <FontAwesomeIcon icon={faSyncAlt} size="2x"/> {/* Sync/Refresh icon */}
          <h4>Money Back Guarantee</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
