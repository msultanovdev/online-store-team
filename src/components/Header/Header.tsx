import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

type dataProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const Header = () => {
  // let basketProducts = localStorage.getItem('basketProducts');
  // let products: dataProps[] = basketProducts ? JSON.parse(basketProducts) : [];
  // let total = JSON.parse(localStorage.getItem('total')!);

  // useEffect(() => {
  //   total = JSON.parse(localStorage.getItem('total')!);
  //   setPrice(total.price);
  // }, [products]);

  // const [price, setPrice] = useState(total.price);
  // const [amount, setAmount] = useState(total.count);

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
          <p>Cart Total: 0$</p>
        </div>
        <Link to="/basket" className="sidebar__links-basket">
          &#128722;
        </Link>
      </nav>
    </header>
  );
};

export default Header;
