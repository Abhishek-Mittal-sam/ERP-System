import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editButton">Edit</span>

            <div className="item">
              <img src="/assets/Tv.jpg" alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">Samsung TV</h1>
                <div className="detailItem">
                  <span className="itemkey">Brand: </span>
                  <span className="itemValue">Samsung</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Price </span>
                  <span className="itemValue">$800</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Stock </span>
                  <span className="itemValue">In Stock</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Product Id </span>
                  <span className="itemValue">DRBDM063</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Users Spending (Last 6 months) of Product" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Single;