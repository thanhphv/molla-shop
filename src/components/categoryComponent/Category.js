import React from "react";

const Category = () => {
  return (
    <div className="category-wrapper">
      <div className="container">
        <div className="category">
          <h2 className="title-section">Shop by Categories</h2>
          <div className="category-content">
            <div className="category-left animate__animated animate__slideInLeft">
              <div className="banner-content">
                <a className="banner-link">
                  <div class="button-flipper">
                    <button class="front-button">Home Decor</button>
                    <button class="back-button">
                      Shop Now <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="category-center">
              <div className="category-center-top">
                <div className="banner-content">
                  <a className="banner-link">
                    <div class="button-flipper">
                      <button class="front-button">Kitchen & Utensil</button>
                      <button class="back-button">
                        Shop Now <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </a>
                </div>
              </div>

              <div className="category-center-bottom">
                <div className="banner-content">
                  <a className="banner-link">
                    <div class="button-flipper">
                      <button class="front-button">Lighting</button>
                      <button class="back-button">
                        Shop Now <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="category-right animate__animated animate__slideInRight">
              <div className="banner-content">
                <a className="banner-link">
                  <div class="button-flipper">
                    <button class="front-button">Living Room</button>
                    <button class="back-button">
                      Shop Now <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
