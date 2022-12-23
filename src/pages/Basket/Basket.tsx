import React from "react";
import './Basket.css'

const Basket = () => {
    return (
      <div className="basket__container">
        <div className="basket__container-title">Card is empty</div>
        <div className="basket__container-content">
          <div className="product__container">
            <div className="product__container-header">
              <div className="product__logo">Product In Card</div>
            </div>
            <div className="product__content"></div>
          </div>
          <div className="summary__container">
            <div className="summary__container-logo">Summary</div>
            <div className="summary__container-content"></div>
          </div>
        </div>
      </div>
    );
}

export default Basket;