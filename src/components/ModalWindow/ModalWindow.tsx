import { validateHeaderValue } from "http";
import React, { useEffect, useState } from "react";
import "./ModalWindow.css";

const ModalWindow = () => {
  const [email, setEmail] = useState("");
  const [delivery, setDelivery] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [deliveryDirty, setDeliveryDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email cannot be empty...");
  const [deliveryError, setDeliveryError] = useState(
    "The delivery cannot be empty"
  );
  const [nameError, setNameError] = useState("You must write first/last name");
  const [phoneError, setPhoneError] = useState("");
  const [formValid, setFormvalid] = useState(false);
  useEffect(() => {
    if (emailError || deliveryError || nameError || phoneError) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [emailError, deliveryError, nameError, phoneError]);

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
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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
    // console.log(resultDelivery);
    const firstDeliveryName = resultDelivery[0];
    // console.log(firstDeliveryName);
    const secondDeliveryName = resultDelivery[1];
    const LastDeliveryName = resultDelivery[2];
    //console.log(LastDeliveryName);
    /* if (resultDelivery != undefined) {
      if (firstDeliveryName != undefined) {
        if (firstDeliveryName.length < 3) {
          setDeliveryError("Words must be at least 3 characters");
        } else {
          setDeliveryError("");
        }
      }
      if (secondDeliveryName != undefined) {
        if (secondDeliveryName.length < 3) {
          setDeliveryError("Words must be at least 3 characters");
        } else {
          setDeliveryError("");
        }
      }
      if (LastDeliveryName != undefined) {
        if (LastDeliveryName.length < 3) {
          setDeliveryError("Words must be at least 3 characters");
        } else {
          setDeliveryError("");
        }
      }
      if (resultDelivery.length < 3) {
        setDeliveryError("write 3 words");
      } else {
        setDeliveryError("");
      }
    }
    */
   
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const name: string = e.target.value;
    const nameResult = name.split("");

    /*var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regName.test(name)) {
      setNameError("Please enter your full name (first & last name).");
    } else {
      setNameError("");
    }*/
  };
  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    var regPhone = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
    if (!regPhone.test(name)) {
      setPhoneError("Please start with +");
    } else {
      setPhoneError("");
    }
  };
  return (
    <div className="modal__window">
      <div className="modal__form">
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
                className="modal__window-name"
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
                placeholder="+7 (900) 123-45-67"
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
                className="email"
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
                className="delivery"
                placeholder="Enter your adress...."
              />
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
