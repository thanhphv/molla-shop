import React, { useState } from "react";
import ProductItem from "../trendyProducts/ProductItem";
// import data from "../../data/data";
import { Link } from "react-router-dom";
import { RedoOutlined } from "@ant-design/icons";

const ArrivalProduct = (props) => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const products = props.products;
  const productFurniture = products.filter((product) => {
    return product.category === "Furniture";
  });

  const productDecoration = products.filter((product) => {
    return product.category === "Decoration";
  });

  const productLighting = products.filter((product) => {
    return product.category === "Lighting";
  });

  const displayItemAll = products.slice(0, 8).map((item, index) => {
    return (
      <div className="arrival-product-item">
        <ProductItem
          img={item.img}
          name={item.name}
          price={item.price}
          item={item}
          key="{index}"
          id={item.id}
          desc={item.desc}
          category={item.category}
        />
      </div>
    );
  });

  const displayItemFurniture = productFurniture
    .slice(0, 8)
    .map((item, index) => {
      return (
        <div className="arrival-product-item">
          <ProductItem
            img={item.img}
            name={item.name}
            price={item.price}
            item={item}
            key="{index}"
            id={item.id}
            desc={item.desc}
            category={item.category}
          />
        </div>
      );
    });

  const displayItemDecoration = productDecoration
    .slice(0, 8)
    .map((item, index) => {
      return (
        <div className="arrival-product-item">
          <ProductItem
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            item={item}
            key="{index}"
            desc={item.desc}
            category={item.category}
          />
        </div>
      );
    });

  const displayItemLighting = productLighting.slice(0, 8).map((item, index) => {
    return (
      <div className="arrival-product-item">
        <ProductItem
          img={item.img}
          name={item.name}
          price={item.price}
          item={item}
          key="{index}"
          id={item.id}
          desc={item.desc}
          category={item.category}
        />
      </div>
    );
  });

  return (
    <div className="arrival-wrapper">
      <div className="container">
        <div className="trendy-products">
          <div className="trendy-heading">
            <h2 className="title-section">Recent Arrivals</h2>
            <ul className="nav-tab">
              <li
                className={toggle === 1 ? "tab-item active" : "tab-item"}
                onClick={() => toggleTab(1)}
              >
                ALL
              </li>
              <li
                className={toggle === 2 ? "tab-item active" : "tab-item"}
                onClick={() => toggleTab(2)}
              >
                FURNITURE
              </li>
              <li
                className={toggle === 3 ? "tab-item active" : "tab-item"}
                onClick={() => toggleTab(3)}
              >
                DECORATION
              </li>
              <li
                className={toggle === 4 ? "tab-item active" : "tab-item"}
                onClick={() => toggleTab(4)}
              >
                LIGHTING
              </li>
            </ul>
          </div>
          <div className="trendy-heading__mobile">
            <select onChange={(e) => toggleTab(e.target.value)} value={toggle}>
              <option value="1">ALL</option>
              <option value="2">FURNITURE</option>
              <option value="3">DECORATION</option>
              <option value="4">LIGHTING</option>
            </select>
          </div>

          <div className="arrival-content">
            {/* all-product */}
            <div className={toggle == 1 ? "content active-content" : "content"}>
              {displayItemAll}
            </div>

            <div className={toggle == 2 ? "content active-content" : "content"}>
              {displayItemFurniture}
            </div>

            <div className={toggle == 3 ? "content active-content" : "content"}>
              {displayItemDecoration}
            </div>

            <div className={toggle == 4 ? "content active-content" : "content"}>
              {displayItemLighting}
            </div>
          </div>
          <div className="arrival-button">
            <button>
              <Link to="/product">
                MORE PRODUCT <RedoOutlined />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrivalProduct;
