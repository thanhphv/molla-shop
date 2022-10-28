import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";
import productApi from "../../api/productApi";
import ProductItem from "../../components/trendyProducts/ProductItem";
import { actAddToCart } from "../../action";
import { notification } from "antd";
import "antd/dist/antd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import Footer from "../../components/footerComponent/Footer";
SwiperCore.use([Pagination]);

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        console.log(response);
        setProducts(response.data);
      } catch (err) {
        console.log("err");
      }
    };
    fetchProductList();
  }, []);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.get(Number(productId));
        console.log(response);
        setProduct(response);
      } catch (err) {
        console.log("err");
      }
    };
    fetchProductList();
  }, []);

  const listProduct = products.filter((prod) => {
    return prod.category === product.category;
  });
  console.log(listProduct);
  const displayItem = listProduct.slice(0, 8).map((item, index) => {
    return (
      <SwiperSlide>
        <ProductItem
          img={item.img}
          name={item.name}
          price={item.price}
          item={item}
          id={item.id}
          desc={item.desc}
        />
      </SwiperSlide>
    );
  });

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const openNotification = (product) => {
    notification.success({
      message: "Thông Báo :",
      description: "Sản Phẩm " + product + " Đã Được Thêm Vào Giỏ Hàng  !",
    });
  };

  const addToCart = (product) => {
    const action = actAddToCart(product, 1);
    dispatch(action);
    openNotification(product.name);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-wrapper">
          <div className="product-img">
            <img src={product.img} />
          </div>

          <div className="product-content">
            <h3>{product.name}</h3>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>
            <p>${product.price}</p>
            <span className="product-desc">
              Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
              est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
              lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
              neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
              pede arcu, dapibus eu,
            </span>
            <div className="product-quantity">
              <h4>Quantity </h4>
              <div className="product-quantity-button">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <button
              className="product-btn"
              onClick={() => {
                addToCart(product);
              }}
            >
              <i className="fas fa-cart-arrow-down"></i> ADD TO CART
            </button>

            <div className="product-share">
              <h4>Share:</h4>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>

        <div className="product-info">
          <ul className="nav-tab">
            <li
              className={toggle === 1 ? "tab-item active" : "tab-item"}
              onClick={() => toggleTab(1)}
            >
              Description
            </li>
            <li
              className={toggle === 2 ? "tab-item active" : "tab-item"}
              onClick={() => toggleTab(2)}
            >
              Aditional Information
            </li>
            <li
              className={toggle === 3 ? "tab-item active" : "tab-item"}
              onClick={() => toggleTab(3)}
            >
              Shipping and Returns
            </li>
            <li
              className={toggle === 4 ? "tab-item active" : "tab-item"}
              onClick={() => toggleTab(4)}
            >
              Reviews
            </li>
          </ul>
          <div className="nav-content">
            <div
              className={toggle === 1 ? "content active-content" : "content"}
            >
              <h3>Product Information</h3>
              <span>{product.desc}</span>
            </div>

            <div
              className={toggle === 2 ? "content active-content" : "content"}
            >
              <h3>Information</h3>
              <span>{product.desc}</span>
              <h3>Fabric and care</h3>
              <p>
                <i className="fas fa-circle"></i> Faux suede fabric
              </p>
              <p>
                <i className="fas fa-circle"></i> Gold tone metal hoop handles.
              </p>
              <p>
                <i className="fas fa-circle"></i> RI branding
              </p>
              <p>
                <i className="fas fa-circle"></i> Snake print trim interior
              </p>
              <p>
                <i className="fas fa-circle"></i> Adjustable cross body strap
              </p>
            </div>

            <div
              className={toggle === 3 ? "content active-content" : "content"}
            >
              <h3>Delivery and Returns</h3>
              <span>
                We deliver to over 100 countries around the world. For full
                details of the delivery options we offer, please view our
                Delivery information We hope you’ll love every purchase, but if
                you ever need to return an item you can do so within a month of
                receipt. For full details of how to make a return, please view
                our Returns information
              </span>
            </div>

            <div
              className={toggle === 4 ? "content active-content" : "content"}
            >
              <h3>Reviews (2)</h3>
              <div className="review">
                <div className="review-user">
                  <h4>Sanmata J.</h4>
                  <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span>6 days ago</span>
                </div>
                <div className="review-wrapper">
                  <h4>Good, perfect size</h4>
                  <span className="review-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus cum dolores assumenda asperiores facilis porro
                    reprehenderit animi culpa atque blanditiis commodi
                    perspiciatis doloremque, possimus, explicabo, autem fugit
                    beatae quae voluptas!
                  </span>
                  <div className="review-action">
                    <span>
                      <i className="far fa-thumbs-up"></i> Helpful (2)
                    </span>
                    <span>
                      <i className="far fa-thumbs-down"></i> Unhelpful (0)
                    </span>
                  </div>
                </div>
              </div>

              <div className="review">
                <div className="review-user">
                  <h4>Sanmata J.</h4>
                  <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span>6 days ago</span>
                </div>
                <div className="review-wrapper">
                  <h4>Good, perfect size</h4>
                  <span className="review-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus cum dolores assumenda asperiores facilis porro
                    reprehenderit animi culpa atque blanditiis commodi
                    perspiciatis doloremque, possimus, explicabo, autem fugit
                    beatae quae voluptas!
                  </span>
                  <div className="review-action">
                    <span>
                      <i className="far fa-thumbs-up"></i> Helpful (2)
                    </span>
                    <span>
                      <i className="far fa-thumbs-down"></i> Unhelpful (0)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-suggest">
        <div className="container">
          <div className="product-suggest-wrapper">
            <h3>You May So Like</h3>
            <div className="trendy-content">
              {/* all-product */}
              <div className="active-content">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
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
      <Footer />
    </div>
  );
};

export default ProductDetail;
