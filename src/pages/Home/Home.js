import React, { useState, useEffect } from "react";
import "../../App.css";
import Intro from "../../components/introComponent/Intro";
import TrendyProducts from "../../components/trendyProducts/TrendyProducts";
import Category from "../../components/categoryComponent/Category";
import ArrivalProduct from "../../components/arrivalsComponent/ArrivalProduct";
import Service from "../../components/serviceComponent/Service";
import Cta from "../../components/ctaComponent/Cta";
import productApi from "../../api/productApi";
import BlockPost from "../../components/blogPostComponent/BlockPost";
import Footer from "../../components/footerComponent/Footer";

const Home = (props) => {
  const [products, setProducts] = useState();
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
  return (
    <div>
      <Intro />
      <TrendyProducts products={products ?? []} />
      <Category />
      <ArrivalProduct products={products ?? []} />
      <Service />
      <BlockPost />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
