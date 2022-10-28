import React from "react";
import "../Page.css";
import CartItem from "./CartItem/CartItem";
import Footer from "../../components/footerComponent/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Cart = (props) => {
  const cartList = useSelector((state) => state.carts);
  console.log(cartList.length);
  if (cartList.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <h1 className="page-title">Shopping Cart</h1>
        </div>

        <div className="page-content empty">
          <div className="empty-cart">
            <ShoppingCartOutlined />
            <p>No products added to cart</p>
            <div>
              <Link to="/product">
                <button className="product-btn">RETURN TO SHOP</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="cart-page">
      <div className="page-header">
        <h1 className="page-title">Shopping Cart</h1>
      </div>

      <div className="page-content">
        <div className="container">
          <CartItem cartList={cartList} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
