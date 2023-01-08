import React, { useContext, useState } from "react";
import "./Summary.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { TotalContext } from "../../totalContext";

type summaryType = {
  amountProducts: number;
  total: number;
};

const Summary = ({ amountProducts, total }: summaryType) => {
  const {isModalActive, setIsModalActive} = useContext(TotalContext);
  
  const [promoRsActive, setPromoRsActive] = useState(false);
  const [promoEpmActive, setPromoEpmActive] = useState(false);
  const [newSumActive, setNewSumActive] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoButtonActive, setPromoButtonActive] = useState(false);
  const [promoOld, setPromoOld] = useState(false);
  const reducedPrice = total - total * 0.1;
  const handleClick = () => {
    setPromoButtonActive(!promoButtonActive);
    if (!promoButtonActive) {
      console.log(reducedPrice);
      setNewSumActive(true);
      setPromoOld(true);
    } else if (promoButtonActive) {
      setNewSumActive(false);
      setPromoOld(false);
    }
  };
  const promoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {isModalActive, setIsModalActive} = useContext(TotalContext);

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
        <p
          className={
            promoOld
              ? "summary__content-promo active"
              : "summary__content-promo"
          }
        >
          Total: <span>{total}$</span>
        </p>
        <div
          className={newSumActive ? "reduced__price active" : "reduced__price"}
        >
          <p>
            Total: <span>{reducedPrice}$</span>
          </p>
        </div>

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
            <div className="promo__text">EPAM Systems - 10%</div>
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
        <button className="summary-btn" onClick={() => setIsModalActive(true)}>
          Buy Now
        </button>
      </div>
      <ModalWindow />
    </div>
  );
};

export default Summary;
