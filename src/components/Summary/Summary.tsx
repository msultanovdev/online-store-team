import React, { useContext, useState } from "react";
import "./Summary.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { TotalContext } from "../../totalContext";

type summaryType = {
  amountProducts: number;
  total: number;
};

const Summary = ({ amountProducts, total }: summaryType) => {
  const { setIsModalActive } = useContext(TotalContext);

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
      setPromoOld(true);
      setNewSumActive(true);
    } else {
      setPromoOld(false);
      setNewSumActive(false);
    }

    if (promoButtonEPMActive && promoButtonRSActive) {
      setPromoOld(true);
      setNewSumActive(false);
      setNewSumALLActive(true);
    } else {
      setPromoOld(true);
      setNewSumActive(true);
      setNewSumALLActive(false);
    }

    if (!promoButtonEPMActive && !promoButtonRSActive) {
      setPromoOld(false);
      setNewSumActive(true);
    }
  };

  const handleClickEPM = () => {
    setPromoButtonEPMActive(!promoButtonEPMActive);
    if (!promoButtonEPMActive) {
      setPromoOld(true);
      setNewSumActive(true);
    } else {
      setPromoOld(false);
      setNewSumActive(false);
    }

    if (promoButtonEPMActive && promoButtonRSActive) {
      setPromoOld(true);
      setNewSumActive(false);
      setNewSumALLActive(true);
    } else {
      setPromoOld(true);
      //setNewSumActive(true);
      setNewSumALLActive(false);
    }

    if (!promoButtonEPMActive && !promoButtonRSActive) {
      setPromoOld(false);
      setNewSumActive(false);
    }
  };

  const promoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromo(e.target.value);
    const point = e.target.value;
    if (point === "RS") {
      setPromoRsActive(true);
    } else if (point === "EPM") {
      setPromoEpmActive(true);
    } else {
      //setPromoRsActive(false);
      // setPromoEpmActive(false);
    }
  };
  /*
  const promoHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.value) {
      case "RS":
        setPromoRsActive(true);
        break;
      case "EPM":
        setPromoEpmActive(true);
        break;
    }
  };
*/
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
              {promoButtonRSActive ? "DROP" : "ADD"}
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
              {promoButtonEPMActive ? "DROP" : "ADD"}
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
