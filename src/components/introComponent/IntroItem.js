import React from "react";
import { Link } from "react-router-dom";

const IntroItem = () => {
  return (
    <>
      <div className="intro-item">
        <div className="intro-content">
          <h3 className="intro-subtitle">Clearence</h3>
          <h1 className="intro-title">
            Chairs & Chaises <br /> Up to 40% off
          </h1>
          <Link to="/shop" className="button">
            <span>Shop Now</span>
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="intro-item">
        <div className="intro-content">
          <h3 className="intro-subtitle">New in</h3>
          <h1 className="intro-title">
            Kitchen & Dinning <br />
            Collection
          </h1>
          <Link to="/shop" className="button">
            <span>Discover Now</span>
            <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroItem;
