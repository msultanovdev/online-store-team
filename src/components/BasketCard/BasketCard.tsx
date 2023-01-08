import React, { useContext } from "react";
import './BasketCard.css';
import { TotalContext } from "../../totalContext";

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

interface countType {
    [key: string]: number
}

type basketCardTypes = {
    id: number,
    title: string,
    thumbnail: string,
    description: string,
    rating: number,
    discountPercentage: number,
    stock: number,
    price: number,
    item: dataProps,
    counts: countType,
    index: number
}

const BasketCard = ({id, title, thumbnail, description, rating, discountPercentage, stock, price, item, counts, index}: basketCardTypes) => {
   const basketProducts = JSON.parse(localStorage.getItem('basketProducts')!);

   const {totalPrice, setTotalPrice, amount, setAmount} = useContext(TotalContext);

   const addToBasket = (e: React.MouseEvent<HTMLButtonElement>, item: dataProps) => {
    e.preventDefault();
    const total = JSON.parse(localStorage.getItem('total')!);
    localStorage.setItem('total', JSON.stringify({
      count: total.count + 1,
      price: total.price + item.price
    }));
    setTotalPrice(totalPrice + item.price);
    setAmount(amount + 1);
    basketProducts.push(item);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
   }

   const removeFromBasket = (e: React.MouseEvent<HTMLButtonElement>, object: dataProps) => {
    e.preventDefault();
    const total = JSON.parse(localStorage.getItem('total')!);
    localStorage.setItem('total', JSON.stringify({
      count: total.count - 1,
      price: total.price - item.price
    }));
    setTotalPrice(totalPrice - item.price);
    setAmount(amount - 1);
    const indexOfObj = basketProducts.findIndex((item: dataProps) => item.id === object.id);
    basketProducts.splice(indexOfObj, 1);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
   }

    return(
        <div className="basket-card">
            <div className="basket-card-number">
                <p>{index}</p>
            </div>
            <div className="basket-card__thumbnail">
                <img src={thumbnail} alt="item" />
            </div>
            <div className="basket-card__info">
                <div className="basket-card__info-header">
                    <h2 className="basket-card__info-title">
                        {title}
                    </h2>
                </div>
                <div className="basket-card__info-hero">
                    <p className="basket-card__info-description">
                        {description}
                    </p>
                </div>
                <div className="basket-card__info-footer">
                    <p className="basket-card__info-rating">Rating: {rating}</p>
                    <p className="basket-card__info-discount">Discount: {discountPercentage}%</p>
                </div>
            </div>
            <div className="basket-card__block">
                <div className="basket-card__block-stock">
                    <p>Stock: {stock}</p>
                </div>
                <div className="basket-card__block-buttons">
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addToBasket(e, item)} disabled={stock > counts[`${id}`] ? false : true} className="basket-btn">+</button>
                    <p className="basket-card__block-count">{counts[item.id]}</p>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeFromBasket(e, item)} className="basket-btn">-</button>
                </div>
                <div className="basket-card__block-price">
                    <p>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;