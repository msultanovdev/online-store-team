import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main-page">
        <div className="main-page__content">
          <h1>Welcome to ONLINE-STORE</h1>
          <p>Please, show our <span><Link to="/catalog">catalog</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Main;
