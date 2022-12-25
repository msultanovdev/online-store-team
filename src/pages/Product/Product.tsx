import React, { useState } from "react";
import './Product.css';
import { useParams } from "react-router-dom";
import db from '../../assets/db.json';

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
    const {id} = useParams();
    const data: itemType = db.products.filter(item => item.id === Number(id))[0];
    console.log(data);

    const [image, setImage] = useState(data.thumbnail);

    const changeMainImage = (item: string): void => {
        setImage(item)
    }

    return(
        <div className="product">
            <h3 className="product-title">
                    {data.title}
            </h3>
            <div className="product__content">
                
                <div className="product__content-images">
                    <div className="product__content-thumbnail">
                        <img 
                            src={image} 
                            alt={data.title + "image"} 
                            className="product__content-thumbnail-img" 
                        />
                    </div>
                    <div className="product__content-images-block">
                        {
                            data.images.map((item: string) => 
                                <div className="product__content-images-block-wrapper" 
                                    key={item}
                                    onClick={() => changeMainImage(item)}
                                >
                                    <img src={item} alt="product-image" />
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="product__content-info">
                    <div className="product__content-info-text">
                        <p className="product__content-info-desription">Description: <span>{data.description}</span></p>
                        <p className="product__content-info-discount">Discount Percentage: <span>{data.discountPercentage}</span></p>
                        <p className="product__content-info-rating">Rating: <span>{data.rating}</span></p>
                        <p className="product__content-info-stock">Stock: <span>{data.stock}</span></p>
                        <p className="product__content-info-brand">Brand: <span>{data.brand}</span></p>
                        <p className="product__content-info-category">Category: <span>{data.category}</span></p>
                    </div>
                    <div className="product__content-info-buttons">
                        <p className="product-price">{data.price}$</p>
                        <button className="btn">Add to Cart</button>
                        <button className="btn">But Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;