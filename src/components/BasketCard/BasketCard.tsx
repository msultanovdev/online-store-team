import React from "react";
import './BasketCard.css';

type basketCardTypes = {
    title: string,
    thumbnail: string,
    description: string,
    rating: number,
    discountPercentage: number,
    stock: number,
    price: number
}

const BasketCard = ({title, thumbnail, description, rating, discountPercentage, stock, price}: basketCardTypes) => {
    return(
        <div className="basket-card">
            <div className="basket-card__thumbnail">
                <img src={thumbnail} alt="item image" />
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
                    <a className="basket-btn">+</a>
                    <p className="basket-card__block-count">10</p>
                    <a className="basket-btn">-</a>
                </div>
                <div className="basket-card__block-price">
                    <p>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;