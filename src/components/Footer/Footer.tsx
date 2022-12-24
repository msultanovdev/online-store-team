import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer__name-student"
        data-content="KriStiNa Kasyanovskaya"
      >
        KriStiNa Kasyanovskaya
      </div>
      <a href="https://rs.school/" className="footer__rs-logo">
        <img
          src="https://rs.school/images/rs_school_js.svg"
          alt="rs-logo"
          className="rs-logo__img"
        ></img>
      </a>
      <div className="footer__name-student" data-content="Mukhammadamin">
        Mukhammadamin
      </div>
    </footer>
  );
};

export default Footer;
