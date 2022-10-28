import React from "react";
import "./App.css";
import "animate.css";
import Header from "./components/headerComponent/Header";
// import Footer from "./components/footerComponent/Footer";
import Cart from "./pages/Cart/Cart.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Product from "./pages/Product/Product.js";
import ProductDetail from "./pages/ProductDetail/ProductDetail.js";
import Error from "./pages/Error/Error.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import BackToTop from "react-back-to-top-button";

import { ArrowUpOutlined } from "@ant-design/icons";

function App() {
  return (
    <Router>
      <CartProvider>
        <BackToTop
          showOnScrollUp={false}
          showAt={50}
          speed={1500}
          easing="easeInOutQuint"
        >
          <ArrowUpOutlined />
        </BackToTop>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product" component={Product} />
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/:somestring" component={Error} />
        </Switch>
        {/* <Footer /> */}
      </CartProvider>
    </Router>
  );
}

export default App;
