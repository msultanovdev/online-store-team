import React, { useState } from "react";
import "./Summary.css";
import ModalWindow from "../ModalWindow/ModalWindow";

type summaryType = {
  amountProducts: number;
  total: number;
};

const Summary = ({ amountProducts, total }: summaryType) => {
  const [modalWindow, setModalWindow] = useState(false);
  return (
    <div className="summary">
      <div className="summary-title">
        <h2>Summary</h2>
      </div>
      <div className="summary__content">
        <p className="summary-content-products">
          Products: <span>{amountProducts}</span>
        </p>
        <p className="summary__content-total">
          Total: <span>{total}$</span>
        </p>
      </div>
      <div className="summary-promo">
        <input
          type="text"
          className="promo-input"
          placeholder="Enter promo..."
        />
      </div>
      <div className="summary-button">
        <button className="summary-btn" onClick={() => setModalWindow(true)}>
          Buy Now
        </button>
      </div>
      <ModalWindow active={modalWindow} setActive={setModalWindow} />
    </div>
  );
};

export default Summary;
