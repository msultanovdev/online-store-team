import React, { useContext, useState } from "react";
import './Basket.css';
import BasketCard from "../../components/BasketCard/BasketCard";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";
import BasketPagination from "../../components/BasketPagination/BasketPagination";
import { TotalContext } from "../../totalContext";
import { ICountType } from "../../types";

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
    const uniqueProductsTwo: dataProps[] = [];

    const {totalPrice} = useContext(TotalContext);

    localStorage.setItem('uniqueProducts', JSON.stringify(uniqueProductsTwo));
    
    products.reduce((o, i) => {
      if (!uniqueProductsTwo.find(v => v.id === i.id)) {
        uniqueProductsTwo.push(i);
      }
      return o;
    }, []);

    localStorage.setItem('total', JSON.stringify({
      count: products?.length,
      price: products?.length && products.reduce((prev, curr) => prev + curr.price, 0)
    }));

    const counts: ICountType = {}
    products.forEach(function(a){
      counts[a.id] = counts[a.id] + 1 || 1;
    });

    localStorage.setItem('counts', JSON.stringify(counts));

    const total = JSON.parse(localStorage.getItem('total')!);

    const [currentPage, setCurrentPage] = useState(1);
    
    // const [productsPerPage, setProductsPerPage] = useState(3);

    const [perPageInput, setPerPageInput] = useState(3);

    const lastProductIndex = currentPage * perPageInput;
    const firstProductIndex = lastProductIndex - perPageInput;
    const currentProducts = uniqueProductsTwo.length ? uniqueProductsTwo.slice(firstProductIndex, lastProductIndex) : [] ;

    return (
      <div className="basket">
        <div className="basket__products">
          <div className="basket__products-pagination">
            <div className="basket__products-pagination-items">
              <p>Items</p>
              <input className="page-input" type="number" min={1} onChange={(e: React.FormEvent<HTMLInputElement>) => setPerPageInput(Number(Number(e.currentTarget.value) >= 1 ? e.currentTarget.value : perPageInput))} />
            </div>
            <BasketPagination totalProducts={uniqueProductsTwo.length} setCurrentPage={setCurrentPage} productsPerPage={perPageInput} currentPage={currentPage} />
          </div>
          { products.length ?
            currentProducts.map((item: dataProps, index: number)  => 
              <Link to={'/catalog/' + item.id} key={item.id}>
                <BasketCard
                  index={index + 1}
                  counts={counts}
                  item={item}
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
          <Summary total={totalPrice} amountProducts={total.count} />
        </div>
      </div>
    );
}

export default Basket;