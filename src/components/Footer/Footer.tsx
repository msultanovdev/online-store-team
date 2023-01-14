import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer__name-student"
        data-content="KriStiNa Kasyanovskaya"
      >
        <a data-testId="kristina" href="https://github.com/KasyanovskayaKristina">
          KriStiNa Kasyanovskaya
        </a>
      </div>
      <a href="https://rs.school/" className="footer__rs-logo">
        <img
          data-testId="rs-logo"
          src="https://rs.school/images/rs_school_js.svg"
          alt="rs-logo"
          className="rs-logo__img"
        ></img>
      </a>
      <div className="year">2023</div>
      <div className="footer__name-student" data-content="Mukhammadamin">
        <a data-testId="msultanov" href="https://github.com/msultanovdev"> Mukhammadamin</a>
      </div>
    </footer>
  );
};

export default Footer;
