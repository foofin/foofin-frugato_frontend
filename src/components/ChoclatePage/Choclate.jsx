import React from 'react';


// import './ChocolatesPage.css';
import "./Chocolate.css"
import ChocolatesSidebar from '../ChoclateSidebar/ChocolatesSidebar';
import PromoCarousel from '../PromoCarousel/PromoCarousel';

const ChocolatesPage = () => {
  return (
    <div className="chocolates-page">
      <ChocolatesSidebar/>
      <PromoCarousel/>
    </div>
  );
};

export default ChocolatesPage;
