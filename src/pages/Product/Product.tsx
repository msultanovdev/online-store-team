import React from "react";
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
    const data: any = db.products.filter(item => item.id === Number(id))[0];
    console.log(data);

    return(
        <div>
            <h3>
                {data.title}
            </h3>
        </div>
    );
}

export default Product;