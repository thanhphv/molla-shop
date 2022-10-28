import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="cta-wrapper">
      <div className="container">
        <div className="cta-content">
          <div className="cta-left">
            <h3 className="cta-title">Sign Up & Get 10% Off</h3>
            <span className="cta-desc">
              Molla presents the best in interior design
            </span>
          </div>
          <div className="cta-right">
            <Link to="/register">
              <button className="product-btn">
                <span>SIGN UP</span>
                <i class="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
