import React, { useEffect, useState } from "react";
import './Basket.css';
import BasketCard from "../../components/BasketCard/BasketCard";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";
import BasketPagination from "../../components/BasketPagination/BasketPagination";

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
    let uniqueProducts: dataProps[] = [];
    if(products.length) uniqueProducts = [...new Set(products)];

    localStorage.setItem('total', JSON.stringify({
      count: products?.length,
      price: products?.length && products.reduce((prev, curr) => prev + curr.price, 0)
    }));

    let total = JSON.parse(localStorage.getItem('total')!);

    useEffect(() => {
      total = JSON.parse(localStorage.getItem('total')!);
    }, [products]);

    const [currentPage, setCurrentPage] = useState(1);
    
    const [productsPerPage, setProductsPerPage] = useState(3);

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = uniqueProducts.length ? uniqueProducts.slice(firstProductIndex, lastProductIndex) : [] ;

    return (
      <div className="basket">
        <div className="basket__products">
          <BasketPagination totalProducts={uniqueProducts.length} setCurrentPage={setCurrentPage} productsPerPage={productsPerPage} currentPage={currentPage} />
          { products.length ?
            currentProducts.map((item: dataProps)  => 
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
          <Summary total={total.price} amountProducts={total.count} />
        </div>
      </div>
    );
}

export default Basket;