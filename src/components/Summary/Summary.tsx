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
  const [newSumActive, setNewSumActive] = useState(false);
  const [newSumALLActive, setNewSumALLActive] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoButtonRSActive, setPromoButtonRSActive] = useState(false);
  const [promoButtonEPMActive, setPromoButtonEPMActive] = useState(false);
  const [promoOld, setPromoOld] = useState(false);
  const reducedPrice = total - total * 0.1;
  const allReducedPrice = total - total * 0.2;

  const handleClickRS = () => {
    setPromoButtonRSActive(!promoButtonRSActive);
    if (!promoButtonRSActive) {
      console.log(reducedPrice);
      setNewSumActive(true);
      setPromoOld(true);
    } else if (promoButtonRSActive) {
      setNewSumActive(false);
      setPromoOld(false);
      setPromoRsActive(false);
      //setPromoEpmActive(false);
    }
  };
  const handleClickEPM = () => {
    setPromoButtonEPMActive(!promoButtonEPMActive);
    if (!promoButtonEPMActive) {
      console.log(reducedPrice);
      setNewSumActive(true);
      setPromoOld(true);
    } else if (promoButtonEPMActive) {
      setNewSumActive(false);
      setPromoOld(false);
      //setPromoRsActive(false);
      setPromoEpmActive(false);
    }
  };

  const promoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value);
    const point = e.target.value;
    console.log(point);
    if (point === "RS") {
      setPromoRsActive(true);
    } else if (point === "EPM") {
      setPromoEpmActive(true);
    } else {
      //setPromoRsActive(false);
      // setPromoEpmActive(false);
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
            newSumALLActive ? "reduced__priceALL active" : "reduced__priceALL"
          }
        >
          <p>
            Total: <span>{allReducedPrice}$</span>
          </p>
        </div>
        <div
          className={
            promoRsActive ? "promo__contentRs active" : "promo__contentRs"
          }
        >
          <div className="promo__block">
            <div className="promo__text">Rolling Scopes School - 10%</div>
            <button className="promo__button" onClick={handleClickRS}>
              {promoButtonRSActive ? "Drop" : "Add"}
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
            <button className="promo__button" onClick={handleClickEPM}>
              {promoButtonEPMActive ? "Drop" : "Add"}
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
