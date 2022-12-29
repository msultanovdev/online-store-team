import React, { useContext, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import db from "../../assets/db.json";
import { TotalContext } from "../../totalContext";


type itemType = {
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
  images: string[];
};

const Product = () => {
  const {totalPrice, setTotalPrice} = useContext(TotalContext);
  const basketProducts = JSON.parse(
    localStorage.getItem("basketProducts") || `[]`
  );

  const addToCart = (object: itemType) => {
    isAdded(object);
    const total = JSON.parse(localStorage.getItem('total')!);
    setTotalPrice(total.price + object.price);
    localStorage.setItem('total', JSON.stringify({
      count: total.count + 1,
      price: total.price + object.price
    }));
    setTotalPrice(totalPrice + object.price);
    basketProducts.push(object);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
    setButtonState(!buttonState);
  };

  const removeFromCart = (object: itemType) => {
    const counts = JSON.parse(localStorage.getItem('counts')!);
    const total = JSON.parse(localStorage.getItem('total')!);
    const isCounts = JSON.parse(localStorage.getItem('counts')!) !== null ? true : false;
    setTotalPrice(total.price - object.price * (isCounts ? counts[`${object.id}`] : 1));
    localStorage.setItem('total', JSON.stringify({
      count: total.count - 1,
      price: total.price - object.price * (isCounts ? counts[`${object.id}`] : 1)
    }));
    const indexOfObj = basketProducts.findIndex((item: itemType) => item.id === object.id);
    basketProducts.sort().splice(indexOfObj, isCounts ? counts[`${object.id}`] : 1);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
    setButtonState(!buttonState);
  };

  const isAdded = (item: itemType) => {
    if (basketProducts.filter((obj: itemType) => obj.id === item.id).length) {
      return true;
    }
    return false;
  };

  const { id } = useParams();
  const data: itemType = db.products.filter(
    (item) => item.id === Number(id)
  )[0];

  const [image, setImage] = useState(data.thumbnail);

  const changeMainImage = (item: string): void => {
    setImage(item);
  };

  const [buttonState, setButtonState] = useState(isAdded(data));

  return (
    <div className="product">
      <h3 className="product-title">{data.title}</h3>
      <div className="product-navigation-text">
        <p>
          Store {"->"} Product {"->"} {data.brand} {"->"} {data.title}{" "}
        </p>
      </div>
      <div className="product__content">
        <div className="product__content-images">
          <div className="product__content-thumbnail">
            <img
              src={image}
              alt="item"
              className="product__content-thumbnail-img"
            />
          </div>
          <div className="product__content-images-block">
            {data.images.map((item: string) => (
              <div
                className="product__content-images-block-wrapper"
                key={item}
                onClick={() => changeMainImage(item)}
              >
                <img src={item} alt="item" />
              </div>
            ))}
          </div>
        </div>

        <div className="product__content-info">
          <div className="product__content-info-text">
            <p className="product__content-info-desription">
              Description: <span>{data.description}</span>
            </p>
            <p className="product__content-info-discount">
              Discount Percentage: <span>{data.discountPercentage}</span>
            </p>
            <p className="product__content-info-rating">
              Rating: <span>{data.rating}</span>
            </p>
            <p className="product__content-info-stock">
              Stock: <span>{data.stock}</span>
            </p>
            <p className="product__content-info-brand">
              Brand: <span>{data.brand}</span>
            </p>
            <p className="product__content-info-category">
              Category: <span>{data.category}</span>
            </p>
          </div>
          <div className="product__content-info-buttons">
            <p className="product-price">{data.price}$</p>
            {!buttonState ? (
              <button
                onClick={() => {
                  addToCart(data);
                }}
                className="btn"
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => {
                  removeFromCart(data);
                }}
              >
                Remove From Cart
              </button>
            )}
            <button className="btn">Buy Now</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
