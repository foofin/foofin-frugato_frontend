import React from "react";
import "./PromoCarousel.css";
import { FiArrowRight } from "react-icons/fi";
import chocoLogo from "../../assets/choco-logo.png";

const PromoCarousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <div className="promo-content">
          <div className="chocoDiv">
            <img src={chocoLogo} className="chocoLogo"></img>
            <h5>Dark Chocolate</h5>
          </div>
          <h2>Up to 10% </h2>
          <h2>off Voucher</h2>
          <div>
          <a href="#" className="shop-now">
            <u>Shop Now</u>
            <FiArrowRight />
          </a>
          </div>
          
        </div>
        <div className="promo-image">
          <img
            className="pr-img"
            src="https://s3-alpha-sig.figma.com/img/9118/e1b0/c10ee7e09116939edb8f877002f9a931?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nz5bQ9h6G-btYD33N8RoHzL3vEpcAOT19hNscBLgYUgv~HA78uOMaF82KM19zOshaJREBIUTCqyezEy6wsCYyAGIDvbBvf~yHpHH9Zcmg2KKcDefJ-PrPCh1zqbGhTzwxTEgDk5dHuHW4hYDn-UTK6AVSALqu-cwi42tt7HUO64X24vDw8UAmL8SrXe2Oh~LcI-nmlVxtds~2yFGF9S1UGDTiX88C0frnnRgf22Z61tYzmA-xTq3dd8SkrnoNGOAiZ6oJ425MG6a9r2JuWfhG5e~aRqRPDhfRB2dKEocH478xedB3FOF1z9VYsE-pTnw-1~0aKpJERV9gIpMt7IjKg__"
            alt="Promo"
          />
        </div>
      </div>

      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default PromoCarousel;
