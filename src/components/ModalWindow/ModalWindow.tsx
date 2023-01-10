import React, { useContext, useEffect, useState } from "react";
import "./ModalWindow.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";

import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";
import mirCard from "../../assets/mir-credit.png";
import creditCard from "../../assets/credit-card.png";
import { TotalContext } from "../../totalContext";
import { useNavigate } from "react-router-dom";

//const [image, setImage] = useState("");
type ModalType = {
  active: boolean;
  setActive: (active: boolean) => void;
};
const ModalWindow = () => {
  const { isModalActive, setIsModalActive, setAmount, setTotalPrice } =
    useContext(TotalContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [delivery, setDelivery] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [focus, setFocus] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [deliveryDirty, setDeliveryDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [cardNumberDirty, setCardNumberDirty] = useState(false);
  const [cardDateDirty, setCardDateDirty] = useState(false);
  const [cardCvvDirty, setCardCvvDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email cannot be empty...");
  const [deliveryError, setDeliveryError] = useState(
    "The delivery cannot be empty"
  );
  const [nameError, setNameError] = useState("You must write first/last name");
  const [phoneError, setPhoneError] = useState("");
  const [cardError, setCardError] = useState("");
  const [cartDateError, setCardDateError] = useState("");
  const [cardCvvError, setCardCvvError] = useState("");
  const [formValid, setFormvalid] = useState(false);
  const [cardImage, setCardImage] = useState("");
  const [order, setOrder] = useState(false);
  const [newOrderActive, setNewOrderActive] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  useEffect(() => {
    if (
      emailError ||
      deliveryError ||
      nameError ||
      phoneError ||
      cardError ||
      cartDateError ||
      cardCvvError
    ) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [
    emailError,
    deliveryError,
    nameError,
    phoneError,
    cardError,
    cartDateError,
    cardCvvError,
  ]);

  const blurEffect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "delivery":
        setDeliveryDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "phone_number":
        setPhoneDirty(true);
        break;
      case "card-number":
        setCardNumberDirty(true);
        break;
      case "card-date":
        setCardDateDirty(true);
        break;
      case "card-cvv":
        setCardCvvDirty(true);
        break;
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /.+@.+\..+/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Uncorrect email");
    } else {
      setEmailError("");
    }
  };
  const deliveryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(e.target.value);
    const delivery: string = e.target.value;
    const resultDelivery = delivery.split(" ");
    if (resultDelivery.length >= 3) {
      const [firstWord, secondWord, thirdWord]: string[] = resultDelivery;
      if (firstWord.length < 3) {
        setDeliveryError(`${firstWord} must be at least 3 symbols`);
      } else if (secondWord.length < 3) {
        setDeliveryError(`${secondWord} must be at least 3 symbols`);
      } else if (thirdWord.length < 3) {
        setDeliveryError(`${thirdWord} must be at least 3 symbols`);
      } else {
        setDeliveryError("");
      }
    } else {
      setDeliveryError("At least 3 words!");
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const name: string = e.target.value;
    const nameResult = name.split(" ");
    if (nameResult.length >= 2) {
      const [firstName, lastName]: string[] = nameResult;
      if (firstName.length < 3) {
        setNameError(`${firstName} must be at least 3 symbols`);
      } else if (lastName.length < 3) {
        setNameError(`${lastName}  must be at least 3 symbols`);
      } else {
        setNameError("");
      }
    } else {
      setNameError("At least 2 words!");
    }
  };
  const cardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: string = e.currentTarget.value.replace(/\D/g, '');
    
    setCardNumber(result);
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: string = e.currentTarget.value.replace(/\D/g, '');
    const mm = result.slice(0,2);

    if(Number(mm) > 12) {
      setCardDate('');
    } else {
      setCardDate(result);
    }

  };
  const cvvHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: string = e.currentTarget.value.replace(/\D/g, '');

    setCardCvv(result);
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res: string = e.currentTarget.value.replace(/\D/g, "");
    setPhone("+" + res);

    const phoneNum: string = e.currentTarget.value;
    if (phoneNum.length <= 9) {
      setPhoneError("Phone number must have at least 9 symbols");
    } else {
      setPhoneError("");
    }
  };

  const onConfirm = () => {
    setIsConfirm(true);
    setTimeout(() => {
      navigate("/catalog");
      localStorage.setItem("basketProducts", JSON.stringify([]));
      localStorage.setItem("counts", JSON.stringify({}));
      localStorage.setItem("total", JSON.stringify({ price: 0, count: 0 }));
      setAmount(0);
      setTotalPrice(0);
      setIsModalActive(false);
    }, 3000);
  };

  return (
    <div
      className={isModalActive ? "modal__window active" : "modal__window"}
      onClick={() => setIsModalActive(false)}
    >
      {!isConfirm ? 
      <div
      className={isModalActive ? "modal__form active" : "modal__form"}
      onClick={(e) => e.stopPropagation()}
    >
      <form>
        <div className="form__form-content">
          <div className="modal__window-title">Personal Details</div>
          <div className="modal__window-input">
            {nameDirty && nameError && (
              <div className="error">{nameError}</div>
            )}
            <input
              onChange={(e) => nameHandler(e)}
              onBlur={(e) => blurEffect(e)}
              value={name}
              type="text"
              name="name"
              className="modal__window-name modal__window-input"
              placeholder="Enter your first/last name...."
            />
            {phoneDirty && phoneError && (
              <div className="error">{phoneError}</div>
            )}
            <input
              value={phone}
              onChange={(e) => phoneHandler(e)}
              onBlur={(e) => blurEffect(e)}
              type="text"
              name="phone_number"
              list="tel-list"
              placeholder="+99865985463"
              className="modal__window-input"
            ></input>
            {emailDirty && emailError && (
              <div className="error">{emailError}</div>
            )}
            <input
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurEffect(e)}
              value={email}
              name="email"
              type="text"
              className="email modal__window-input"
              placeholder="Enter your email...."
            />
            {deliveryDirty && deliveryError && (
              <div className="error">{deliveryError}</div>
            )}
            <input
              onChange={(e) => deliveryHandler(e)}
              onBlur={(e) => blurEffect(e)}
              value={delivery}
              name="delivery"
              type="text"
              className="delivery modal__window-input"
              placeholder="Enter your adress...."
            />
            <div className="credit__card">
              <div className="credit__card-title">Credit Card</div>
              <Cards
                number={cardNumber}
                name={cardName}
                expiry={cardDate}
                cvc={cardCvv}
                focused={focus}
              />
              <form className="card-form">
                <input
                  type="tel"
                  name="cardNumber"
                  placeholder="Card Number"
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => cardHandler(e)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name"
                  maxLength={12}
                  value={cardName}
                  onChange={(e) => setCardName(e.currentTarget.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="tel"
                  name="cardDate"
                  maxLength={4}
                  placeholder="MM/YY Expiry"
                  value={cardDate}
                  onChange={(e) => dateHandler(e)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="tel"
                  name="cardCvv"
                  maxLength={3}
                  placeholder="CVV"
                  value={cardCvv}
                  onChange={(e) => cvvHandler(e)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </form>
            </div>
            <div className="order">{order}</div>
            <button
              disabled={!formValid}
              type="submit"
              className={newOrderActive ? "submit__button active" : "submit__button"}
              onClick={() => onConfirm()}
            >
              Confirim
            </button>
          </div>
        </div>
      </form>
    </div> : <div className="complet-confirm">Complete<br/><span>thanks for your buying!</span></div>  
    }
    </div>
  );
};

export default ModalWindow;
