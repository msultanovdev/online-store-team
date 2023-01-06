import { validateHeaderValue } from "http";
import React, { useEffect, useState } from "react";
import { stripVTControlCharacters } from "util";
import "./ModalWindow.css";

//const [image, setImage] = useState("");
type ModalType = {
  active: boolean;
  setActive: (active: boolean) => void;
};
const ModalWindow = ({ active, setActive }: ModalType) => {
  const [email, setEmail] = useState("");
  const [delivery, setDelivery] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
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
    console.log(resultDelivery);
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
  //console.log(LastDeliveryName);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const name: string = e.target.value;
    const nameResult = name.split(" ");
    console.log(nameResult);
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

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    const phoneNum: string = e.target.value;
    /*  const phoneRes = [0 - 9];
    if (!phoneNum.toString().match(phoneRes)) {
      setPhoneError("");
    } else {
      setPhoneError("Uncorrect phone");
    }
  */
    const phoneRes = phoneNum.split("");
    console.log(phoneRes);
    // if (phoneRes.length >= 9) {
    const phoneError = ["0 - 9"];
    const phoneNumber: string[] = phoneRes;
    if (phoneNumber[0] != "+") {
      setPhoneError("Please start with +");
    } else if (phoneNumber.length < 9) {
      setPhoneError("You can use minimum 9 simbols");
    } else if (phoneNumber === phoneError) {
      setPhoneError("");
    } else {
      setPhoneError("Use numbers");
    }
    // }
  };
  const cardNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
    const cardNum: string = e.target.value;
    if (cardNum.length != 16) {
      setCardError("write only 16 simbols");
    } else {
      setCardError("");
    }
    /*
    if (cardNum[0] === "4") {
      setImage("");
    } else if (cardNum[0] === "5") {
      setImage("");
    } else if (cardNum[0] === "2") {
      setImage("");
    }*/
  };

  const cardDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDate(e.target.value);
    const card: string = e.target.value;
    /*if (card[0] !== "1" && card[0] !== "0") {
      card = "";
    }
    if (card.length === 2) {
      if (
        parseInt(card.substring(0, 2)) > 12 ||
        parseInt(card.substring(0, 2)) == 0
      ) {
        card = card[0];
      } else if (card.length === 2) {
        card += "/";
      } else {
        card = card[0];
      }
    }*/
    // }
  };
  const cardCvvHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCvv(e.target.value);
    const cvv: string = e.target.value;
    if (cvv.length != 3) {
      setCardCvvError("use 3 simbols");
    } else {
      setCardCvvError("");
    }
  };

  return (
    <div
      className={active ? "modal__window active" : "modal__window"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__form active" : "modal__form"}
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
                type="tel"
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
                <img src="" alt="" className="img__modal" />
                {cardNumberDirty && cardError && (
                  <div className="error">{cardError}</div>
                )}
                <input
                  onChange={(e) => cardNumberHandler(e)}
                  onBlur={(e) => blurEffect(e)}
                  value={cardNumber}
                  type="number"
                  name="card-number"
                  className="credir__card-number modal__window-input"
                  placeholder="0000 0000 0000 0000"
                />
                {cardDateDirty && cartDateError && (
                  <div className="error">{cartDateError}</div>
                )}
                <input
                  onChange={(e) => cardDateHandler(e)}
                  onBlur={(e) => blurEffect(e)}
                  value={cardDate}
                  type="string"
                  name="card-date"
                  className="credit__card-date modal__window-input"
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {cardCvvDirty && cardCvvError && (
                  <div className="error">{cardCvvError}</div>
                )}
                <input
                  onChange={(e) => cardCvvHandler(e)}
                  value={cardCvv}
                  onBlur={(e) => blurEffect(e)}
                  type="number"
                  name="card-cvv"
                  className="credit__card-cvv modal__window-input"
                  placeholder="000"
                />
              </div>
              <button
                disabled={!formValid}
                type="submit"
                className="submit__button"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
