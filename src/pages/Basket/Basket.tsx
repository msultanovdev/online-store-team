import React from "react";
import './Basket.css';
import BasketCard from "../../components/BasketCard/BasketCard";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";

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
    const products: dataProps[] = basketProducts ? JSON.parse(basketProducts) : [];
    let uniqueProdutcs: dataProps[] = [];
    if(products.length) uniqueProdutcs = [...new Set(products)];

    return (
      <div className="basket">
        <div className="basket__products">
          { products.length ?
            uniqueProdutcs.map((item: dataProps)  => 
              <Link to={'/catalog/' + item.id} key={item.id}>
                <BasketCard 
                  title={item.title} 
                  thumbnail={item.thumbnail} 
                  description={item.description} 
                  price={item.price}
                  rating={item.rating}
                  discountPercentage={item.discountPercentage}
                  stock={item.stock}
                />
              </Link>
            ) : <h3 style={{fontSize: '32px', textAlign: 'center', color: 'white', fontWeight: 900, letterSpacing: '4'}}>Basket is empty</h3>
          }
        </div>
        <div className="basket__summary">
          <Summary total={100} amountProducts={200} />
        </div>
      </div>
    );
}

export default Basket;