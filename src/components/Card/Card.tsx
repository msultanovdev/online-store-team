import React from "react";
import './Card.css';

type dataProps = {
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

const Card = (
        {title, 
        thumbnail,
        category, 
        brand,
        price,
        discountPercentage,
        rating,
        stock}: dataProps
    ) => {
    return(
        <div className="card" style={{color: 'black'}}>
            <h1 className="card-title">{title}</h1>
            <div className="card__content">
                <div className="card__content-thumbnail">
                    <img src={thumbnail} alt="item image" />
                </div>
                <div className="card__content-info">
                    <div className="card__content-info-label">Category: <span>{category}</span></div>
                    <div className="card__content-info-label">Brand: <span>{brand}</span></div>
                    <div className="card__content-info-label">Price: <span>{price}$</span></div>
                    <div className="card__content-info-label">Discount: <span>{discountPercentage}%</span></div>
                    <div className="card__content-info-label">Rating: <span>{rating}</span></div>
                    <div className="card__content-info-label">Stock: <span>{stock}</span></div>
                </div>
                <div className="card__content-buttons">
                    <button className="card-btn card-btn-add">Add</button>
                    <button className="card-btn card-btn-details">Details</button>
                </div>
            </div>
        </div>
    );
}

export default Card;