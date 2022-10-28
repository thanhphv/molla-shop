import React, { useState, useEffect, useRef } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

import SearchBar from "../searchBar/SearchBar";

const HeaderMiddle = () => {
  const [sidebar, setSidebar] = useState(false);

  const cartCount = useSelector((state) => state.carts);

  const showSidebar = () => setSidebar(!sidebar);

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`header-middle ${sticky.isSticky ? "sticky-header" : ""}`}
      ref={headerRef}
    >
      <div className="header-pc">
        <div className="container">
          <div className="header-pc-content">
            <div className="header-left">
              <Link to="/">
                <img src={logo} />
              </Link>
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/product">SHOP</Link>
                  </li>
                  <li className="submenu-pc">
                    <Link to="/product">
                      PRODUCT<i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu-pc-link">
                      <li>
                        <Link to="/menu">Menu 1</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu 2</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right">
              <SearchBar />
              <div className="header-cart">
                <Link to="/cart">
                  <ShoppingCartOutlined />
                  <span className="number">{cartCount.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header-mobile */}
      <div className="header-mobile">
        <div className="container">
          <div className="header-mobile-content">
            <div className="header-mobile-left">
              <i className="fas fa-bars" onClick={showSidebar}></i>
              <Link to="/">
                <img src={logo} />
              </Link>
              <div
                className={sidebar ? "overlay active-overlay" : "overlay"}
              ></div>
              <nav className={sidebar ? "nav-mobile nav-active" : "nav-mobile"}>
                <div className="close" onClick={showSidebar}>
                  <i className="fas fa-times"></i>
                </div>
                <SearchBar />
                <ul onClick={showSidebar}>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/shop">SHOP</Link>
                  </li>
                  <li className="submenu-mobile">
                    <Link to="/product">
                      PRODUCT<i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="submenu-mobile-link">
                      <li>
                        <Link to="/menu">Menu 1</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu 2</Link>
                      </li>
                      <li>
                        <Link to="/menu">Menu 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-cart">
              <Link to="/cart">
                <ShoppingCartOutlined />
                <span className="number">{cartCount.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
