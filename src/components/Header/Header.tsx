import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { TotalContext } from "../../totalContext";

const Header = () => {
  const {totalPrice} = useContext(TotalContext);

  return (
    <header className="header">
      <nav id="main-nav" className="sidebar">
        <div className="sidebar__links">
          <Link to="/catalog" className="sidebar__links-logo">
            Online Store
          </Link>
          {/* <Link to="/catalog">Catalog</Link> */}
        </div>
        <div className="header__price">
          <p>Cart Total: {totalPrice}$</p>
        </div>
        <Link to="/basket" className="sidebar__links-basket">
          &#128722;
        </Link>
      </nav>
    </header>
  );
};

export default Header;
