import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../action/index";
import { Link } from "react-router-dom";
import { notification } from "antd";
import "antd/dist/antd.css";
import {
  StarOutlined,
  StarFilled,
  HeartOutlined,
  EyeOutlined,
  ShareAltOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
const ProductItem = (props) => {
  const dispatch = useDispatch();

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
    <div className="product-item">
      <div className="product-action-vertical">
        <div className="product-expand">
          <HeartOutlined />
        </div>

        <div className="product-expand">
          <EyeOutlined />
        </div>

        <div className="product-expand">
          <ShareAltOutlined />
        </div>
      </div>
      <div className="product-image">
        <Link to={`/products/${props.id}`}>
          <img src={props.item.img} />
          <img src={props.item.img02} />
        </Link>
      </div>

      <div className="product-body">
        <div className="category">
          <span>{props.category}</span>
        </div>
        <div className="product-title">
          <Link to={`/products/${props.id}`}>
            <span>{props.name}</span>
          </Link>
        </div>
        <div className="product-price">
          <span>${props.price}.00</span>
        </div>
        <div className="product-rate">
          <div className="product-rating">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>
          <span>(2 reviews)</span>
        </div>
      </div>

      <div className="product-action">
        <button
          className="product-btn"
          onClick={() => {
            addToCart(props);
          }}
        >
          <ShoppingOutlined />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
