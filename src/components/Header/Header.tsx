import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { TotalContext } from "../../totalContext";
import basketIcon from '../../assets/basket-icon.png';

const Header = () => {
  const {totalPrice, amount} = useContext(TotalContext);

  return (
    <header className="header">
      <nav id="main-nav" className="sidebar">
        <div className="sidebar__links">
          <Link data-testId="title" to="/catalog" className="sidebar__links-logo">
            Online Store
          </Link>
          {/* <Link to="/catalog">Catalog</Link> */}
        </div>
        <div className="header__price">
          <p>Cart Total: {totalPrice}$</p>
        </div>
        <Link to="/basket?limit=3" className="sidebar__links-basket">
          <div className="header__basket">
            <img className="basket-icon" src={basketIcon} alt="basket" />
            <p className="header__basket-amount">{amount}</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
