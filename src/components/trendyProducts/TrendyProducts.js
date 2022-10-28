import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const TrendyProducts = (props) => {
  const products = props.products;
  let displayItem;
  if (products !== null || products !== undefined) {
    displayItem = products.slice(0, 8).map((item, index) => {
      return (
        <SwiperSlide>
          <ProductItem
            img={item.img}
            name={item.name}
            price={item.price}
            item={item}
            key={item.id}
            id={item.id}
            desc={item.desc}
            category={item.category}
          />
        </SwiperSlide>
      );
    });
  }

  return (
    <div className="trendy-wrapper">
      <div className="container">
        <div className="trendy-products">
          <div className="trendy-heading">
            <h2 className="title-section">Trendy Products</h2>
          </div>
          <div className="trendy-content">
            {/* all-product */}
            <div className="active-content">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 1,
                  },
                  515: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper"
              >
                {displayItem}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendyProducts;
