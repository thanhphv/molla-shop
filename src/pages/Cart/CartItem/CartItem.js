import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actDeleteCart, actUpdateCart } from "../../../action/index";
import { Link } from "react-router-dom";
import CartTotal from "../CartTotal/CartTotal";
import { notification } from "antd";
import "antd/dist/antd.css";

const openNotification = (product) => {
  notification.warning({
    message: "Thông Báo :",
    description: "Đã xóa sản phẩm " + product + " khỏi giỏ hàng  !",
  });
};

const CartItem = (props) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const { cartList } = props;

  const updateCart = (product, quantity) => {
    if (quantity > 0) {
      const action = actUpdateCart(product, quantity);
      dispatch(action);
    }
    if (quantity <= 0) {
      const action = actDeleteCart(product);
      dispatch(action);
      openNotification(product.name);
    }
  };

  const deleteCart = (product) => {
    const action = actDeleteCart(product);
    dispatch(action);
    openNotification(product.name);
  };

  return (
    <div className="cart-content">
      <div className="cart">
        <div className="cart-header">
          <div className="product-col"> Product</div>
          <div className="price-col">Price</div>
          <div className="quantity-col">Quantity</div>
          <div className="total-col">Total</div>
          <div className="remove-col"></div>
        </div>

        <div className="cart-body">
          {cartList.map((cartItem, index) => {
            const item = cartItem.product;
            const quantity = cartItem.quantity;
            return (
              <div className="cart-item">
                <div className="product-col">
                  <div className="product">
                    <div className="product-img">
                      <img src={item.img} />
                    </div>
                    <div className="product-name">{item.name}</div>
                  </div>
                </div>
                <div className="price-col">
                  <span>${item.price}</span>
                </div>
                <div className="quantity-col">
                  <button onClick={() => updateCart(item, quantity - 1)}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => updateCart(item, quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="total-col">
                  <span>${item.price * quantity}</span>
                </div>
                <div className="remove-col">
                  <button
                    className="btn-remove"
                    onClick={() => deleteCart(item)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="summary-cart">
        <div className="summary-top">
          <CartTotal carts={carts} />
        </div>
        <div className="summary-bottom">
          <Link to="/product">
            <button className="product-btn">
              <span>CONTINUE SHOPPING</span>
              <i class="fas fa-sync-alt"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
