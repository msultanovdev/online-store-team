import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
            <nav id="main-nav" className="sidebar">
                <div className="sidebar__links">
                    <Link to="/" className="sidebar__links-logo">Online Store</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/catalog">About us</Link>
                    <Link to="/catalog">Delivery</Link>
                </div>
                <Link to="/basket" className="sidebar__links-basket">&#128722;</Link>
            </nav>
        </header>
    );
}

export default Header;