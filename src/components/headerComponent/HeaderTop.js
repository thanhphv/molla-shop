import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actLogout } from "../../action";
import { notification } from "antd";

const HeaderTop = (props) => {
  const userRegister = useSelector((state) => state.register);
  const userLogin = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const user = userRegister.find((x) => x.email === userLogin.email);

  const openSuccess = () => {
    notification.success({
      message: "Thông Báo :",
      description: "Đăng Xuất thành công !",
    });
  };

  const onHandleChange = () => {
    const action = actLogout({});
    dispatch(action);
    openSuccess();
  };

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-social">
          <div className="header-social-nav">
            <ul>
              <li>
                <i className="fas fa-phone"></i>
                <span> CALL: 01234567</span>
              </li>
              <li>About us</li>
              <li>Contact us</li>
              <li className="user-login">
                {user ? "Hello " + user.username : ""}
                {user ? (
                  <span onClick={onHandleChange}>Đăng xuất</span>
                ) : (
                  <div className="user-register">
                    <span>
                      <Link to="/login">Login</Link>
                    </span>
                    <span>|</span>
                    <span>
                      <Link to="/register">Register</Link>
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="header-link">
            <span className="user-login">
              {user ? "Hello " + user.username : ""}
              {user ? (
                <span onClick={onHandleChange}>Đăng xuất</span>
              ) : (
                <div className="user-register">
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                  <span>|</span>
                  <span>
                    <Link to="/register">Register</Link>
                  </span>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
