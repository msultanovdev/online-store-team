import React from "react";
import './Basket.css';

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

const Basket = () => {
    const basketProducts = localStorage.getItem('basketProducts');
    console.log(basketProducts)
    const products: dataProps[] = basketProducts ? JSON.parse(basketProducts) : [];
    const uniqueProdutcs: dataProps[] = [...new Set(products)];

    return (
      <div className="basket__container">
        {
          uniqueProdutcs.map((item: dataProps)  => 
            <div>{item.brand}</div>
          )
        }
      </div>
    );
}

export default Basket;