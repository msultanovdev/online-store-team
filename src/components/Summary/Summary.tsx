import React, { useState } from "react";
import "./Summary.css";
import ModalWindow from "../ModalWindow/ModalWindow";

type summaryType = {
  amountProducts: number;
  total: number;
};

const Summary = ({ amountProducts, total }: summaryType) => {
  const [modalWindow, setModalWindow] = useState(false);
  const [promoRsActive, setPromoRsActive] = useState(false);
  const [promoEpmActive, setPromoEpmActive] = useState(false);
  const [newSum, setNewSum] = useState("");
  const [promo, setPromo] = useState("");
  const [promoButtonActive, setPromoButtonActive] = useState(false);
  const handleClick = () => {
    setPromoButtonActive(!promoButtonActive);
  };
  const promoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value);
    const point = e.target.value;
    console.log(point);
    if (point === "RS") {
      setPromoRsActive(true);
    } else {
      setPromoRsActive(false);
    }
    if (point === "EPM") {
      setPromoEpmActive(true);
    } else {
      setPromoEpmActive(false);
    }
  };

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
        <p className="summary__content-promo"></p>
        <div
          className={
            promoRsActive ? "promo__contentRs active" : "promo__contentRs"
          }
        >
          <div className="promo__block">
            <div className="promo__text">Rolling Scopes School - 10%</div>
            <button className="promo__button" onClick={handleClick}>
              {promoButtonActive ? "Drop" : "Add"}
            </button>
          </div>
        </div>
        <div
          className={
            promoEpmActive ? "promo__contentEpm active" : "promo__contentEpm"
          }
        >
          <div className="promo__block">
            <div className="promo__text">EPAM Systems - 20%</div>
            <button className="promo__button" onClick={handleClick}>
              {promoButtonActive ? "Drop" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <div className="summary-promo">
        <input
          onChange={(e) => promoHandler(e)}
          type="text"
          className="promo-input"
          placeholder="Enter promo..."
        />
        <div className="promo__cod">Promo for test: RS, EPM</div>
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
