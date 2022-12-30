import React from "react";
import './Summary.css';

type summaryType = {
    amountProducts: number, 
    total: number
}

const Summary = ({amountProducts, total}: summaryType) => {
    return(
        <div className="summary">
            <div className="summary-title">
                <h2>Summary</h2>
            </div>
            <div className="summary__content">
                <p className="summary-content-products">Products: <span>{amountProducts}</span></p>
                <p className="summary__content-total">Total: <span>{total}$</span></p>
            </div>
            <div className="summary-promo">
                <input type="text" className="promo-input" placeholder="Enter promo..." />
            </div>
            <div className="summary-button">
                <button className="summary-btn">Buy Now</button>
            </div>
        </div>
    );
}

export default Summary;