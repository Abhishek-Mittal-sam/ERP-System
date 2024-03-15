import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./product.scss";
import Productable from "../../components/productable/Productable";
import { Link } from "react-router-dom";
import Datatable from "../../components/datatable/Datatable";

const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="productList">
         
          <Datatable/>
        </div>
      </div>
    </div>
  );
};

export default Product;