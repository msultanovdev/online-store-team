import React, { useEffect, useState } from "react";

const ModalWindow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("The email cannot be empty...");
  const [passwordError, setPaswordError] = useState(
    "The password cannot be empty"
  );
  const [formValid, setFormvalid] = useState(false);
  useEffect(() => {
    if (emailError || passwordError) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [emailError, passwordError]);
  const blurEffect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
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
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPaswordError(
        "Password must be at least 3 characters and no more than 10"
      );
      if (!e.target.value) {
        setPaswordError("The email cannot be empty...");
      }
    } else {
      setPaswordError("");
    }
  };

  return (
    <div className="modal__window">
      <form>
        <div className="modal__window-title">Personal Details</div>
        {emailDirty && emailError && <div className="error">{emailError}</div>}
        <input
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurEffect(e)}
          value={email}
          name="email"
          type="text"
          className="email"
          placeholder="Enter your email...."
        />
        {passwordDirty && passwordError && (
          <div className="error">{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurEffect(e)}
          value={password}
          name="password"
          type="password"
          className="password"
          placeholder="Enter your password...."
        />
        <button disabled={!formValid} type="submit" className="submit__button">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ModalWindow;
