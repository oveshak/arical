import React from "react";
import "./price.css";
import { price } from "../../data/Data";
const Price = () => {
  return (
    <>
      <div className="container">
        <h1 class="header_text">
          Table <span> Price </span>
        </h1>
        <div className="divider"></div>
        <div class="table_price" >
        {
          price.map((item)=>(
            <div class="price_card" >
            <div class="plan_name"><h3>{item.title}</h3></div>
            <div class="plan_price">
              <h3>{item.price}</h3>
              <p>{item.year}</p>
            </div>
            <div class="plan_body">
              <p>{item.offer1}</p>
              <p>{item.offer2}</p>
              <p>{item.offer3}</p>
              <p>{item.offer4}</p>
              <button class="btn">{item.btn}</button>
            </div>
          </div>
          ))
}
    </div>
      </div>
    </>
  );
};

export default Price;
