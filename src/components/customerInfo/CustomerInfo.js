import React from "react";
import "./CustomerInfo.css";
import { CiCirclePlus } from "react-icons/ci";

const CustomerInfo = () => {
  return (
    <section className="customer-container">
      <div>
        <div className="profile-infermation">
          <p className="name-con">CB</p>
          <div>
            <h3>Hannibal Smith</h3>
            <p>1 Market Street, San Francisco, CA</p>
          </div>
        </div>
        <div className="information">
          <div className="details">
            <p>Customer ID:</p>
            <p>12345</p>
          </div>
          <hr />
          <div className="details">
            <p>Email:</p>
            <p>rachel@example.com</p>
          </div>
          <hr />
          <div className="details">
            <p>Phone:</p>
            <p>8051289805</p>
          </div>
          <hr />
          <div className="details-add">
            <CiCirclePlus />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="assign-button">Assign Other Agent</button>
        <button className="widget-button">Add New Widget</button>
      </div>
    </section>
  );
};

export default CustomerInfo;
