import React, { useState, useEffect } from "react";
import "../Page.css";
import { useSelector } from "react-redux";
import ProductItem from "../../components/trendyProducts/ProductItem";
import ReactPaginate from "react-paginate";
import productApi from "../../api/productApi";
import Sort from "./Sort";
import { DownOutlined } from "@ant-design/icons";
import Footer from "../../components/footerComponent/Footer";

const Product = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [products, setProducts] = useState([]);
  const sortName = useSelector((state) => state.sortName);
  const sortPrice = useSelector((state) => state.sortPrice);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        console.log(response.data);
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
        const response = await productApi.getAll();
        if (sortName.by) {
          if (sortName.by === "name") {
            const listSortByName = response.data.sort((a, b) => {
              if (a.name > b.name) return sortName.value;
              else if (a.name < b.name) return -sortName.value;
              else return 0;
            });
            setProducts(listSortByName);
          } else {
            setProducts(response.data);
          }
        }
      } catch (err) {
        console.log("err");
      }
    };
    fetchProductList();
  }, [sortName]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        if (sortPrice.by) {
          if (sortPrice.by === "price") {
            const listSortByPrice = response.data.sort((a, b) => {
              if (a.price > b.price) return sortPrice.value;
              else if (a.price < b.price) return -sortPrice.value;
              else return 0;
            });
            setProducts(listSortByPrice);
          } else {
            setProducts(response.data);
          }
        }
      } catch (err) {
        console.log("err");
      }
    };
    fetchProductList();
  }, [sortPrice]);

  const itemPerPage = 9;
  const pagesVisited = pageNumber * itemPerPage;

  const displayItem = products
    .slice(pagesVisited, pagesVisited + itemPerPage)
    .map((item, index) => {
      return (
        <div className="item" key={index}>
          <ProductItem
            id={item.id}
            desc={item.desc}
            img={item.img}
            name={item.name}
            price={item.price}
            item={item}
            key={index}
            category={item.category}
          />
        </div>
      );
    });

  const pageCount = Math.ceil(products.length / itemPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="product-page">
      <div className="page-header">
        <h1 className="page-title">Product</h1>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="product-wrapper">
            <div className="product-left">
              <div className="product-filter">
                <span>Filters:</span>
                <span>Clean All</span>
              </div>
              <div className="product-category">
                <div className="category-title">
                  <h3>Category</h3>
                  <DownOutlined />
                </div>
                <div className="product-category-content">
                  <ul>
                    <li>Furniture</li>
                    <li>Coffee & Tables</li>
                    <li>Lightings</li>
                    <li>Decoration</li>
                    <li>Electronic</li>
                    <li>Beds</li>
                  </ul>
                </div>
              </div>

              <div className="product-brand">
                <div className="brand-title">
                  <h3>Brand</h3>
                </div>
                <div className="product-brand-content">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      Next
                    </li>
                    <li>
                      <input type="checkbox" />
                      river Island
                    </li>
                    <li>
                      <input type="checkbox" />
                      Geox
                    </li>
                    <li>
                      <input type="checkbox" />
                      New Balance
                    </li>
                    <li>
                      <input type="checkbox" />
                      UGG
                    </li>
                    <li>
                      <input type="checkbox" />
                      Nike
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="product-right">
              <div className="product-sort">
                <Sort />
              </div>

              <div className="product-list">
                {displayItem}
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
