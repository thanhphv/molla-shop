import React, { useState, useEffect } from "react";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import productApi from "../../api/productApi";
import { Link } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {
  const [products, setProducts] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll();
        setProducts(response.data);
      } catch (err) {
        console.log("err");
      }
    };
    fetchProductList();
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      console.log(filteredData);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="header-search">
      <input
        type="text"
        placeholder="Search..."
        value={wordEntered}
        onChange={handleFilter}
      />
      {filteredData.length === 0 ? (
        <SearchOutlined />
      ) : (
        <CloseOutlined onClick={clearInput} />
      )}

      {wordEntered.length !== 0 && filteredData.length === 0 && (
        <div className="no-data-result">No result</div>
      )}

      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.map((value, key) => {
            return (
              <Link to={`/products/${value.id}`} onClick={clearInput}>
                <div className="result-item">
                  <div className="item-info">
                    <img src={value.img} alt />
                    <span>{value.name}</span>
                  </div>

                  <span className="item-price">{value.price}$</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
