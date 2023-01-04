import React, { useEffect } from "react";
import "./Card.css";
import { useState } from "react";
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
  addToCart: () => void;
  removeFromCart: () => void;
  isAdded: () => boolean;
  isSmall:boolean;
};

const Card = ({
  id,
  title,
  thumbnail,
  category,
  brand,
  price,
  discountPercentage,
  rating,
  stock,
  addToCart,
  removeFromCart,
  isAdded,
  isSmall,
}: dataProps) => {
  const [buttonState, setButtonState] = useState(isAdded());

  return (
    <div className={`card ${isSmall ? "column__cards-content" : ""}`}>
      <h3 className="card-title">{title}</h3>
      <div className="card__content">
        <div className="card__content-thumbnail">
          <img src={thumbnail} alt="item image" />
        </div>
        <div className="card__content-info">
          <div className="card__content-info-label">
            Category: <span>{category}</span>
          </div>
          <div className="card__content-info-label">
            Brand: <span>{brand}</span>
          </div>
          <div className="card__content-info-label">
            Price: <span>{price}$</span>
          </div>
          <div className="card__content-info-label">
            Discount: <span>{discountPercentage}%</span>
          </div>
          <div className="card__content-info-label">
            Rating: <span>{rating}</span>
          </div>
          <div className="card__content-info-label">
            Stock: <span>{stock}</span>
          </div>
        </div>
        <div className="card__content-buttons">
          {!buttonState ? (
            <button
              className="card-btn card-btn-add"
              onClick={() => {
                addToCart();
                setButtonState(!buttonState);
              }}
            >
              Add to cart
            </button>
          ) : (
            <button
              className="card-btn card-btn-remove"
              onClick={() => {
                removeFromCart();
                setButtonState(!buttonState);
              }}
            >
              Remove From Cart
            </button>
          )}
          <Link className="card-btn card-btn-details" to={"/catalog/" + id}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
