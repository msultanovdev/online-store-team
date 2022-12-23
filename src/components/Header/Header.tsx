import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header className="header">
            <nav id="main-nav" className="sidebar">
                <div className="sidebar__links">
                    <a className="sidebar__links-logo" href="/">Online Store</a>
                    <a href="/about" data-content="Catalog">Catalog</a>
                    <a href="!#" data-content="About us">About us</a>
                    <a href="!#" data-content="Delivery">Delivery</a>
                </div>
                <a href="/lorem" className="sidebar__links-basket">&#128722;</a>
            </nav>
        </header>
    );
}

export default Header;