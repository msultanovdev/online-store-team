import React from "react";
import './header.css';
import Basket from '../../assets/basket.png';
import Search from '../../assets/search.png';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-content">
                        <div className="header-content-wrapper">
                            <div className="header-content__logo">Online Store</div>
                                <div className="header-content__basket-image">
                                    <img src={Basket} alt="Basket" className="basket-img" />
                                </div>
                            </div>
                    </div>
                    <div className="header-nav">
                        <div className="header-nav-links">
                            <a href="#" className="header-nav-link">Home</a>
                            <a href="#" className="header-nav-link">Catalog</a>
                            <a href="#" className="header-nav-link">Best Sales</a>
                            <a href="#" className="header-nav-link">Discount Items</a>
                            <a href="#" className="header-nav-link">Basket</a>
                        </div>
                        <div className="header-nav-search">
                            <input type="text" className="header-nav-search-input" />
                            <div className="search-icon-wrapper">
                                <img src={Search} alt="Search Icon" className="search-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;