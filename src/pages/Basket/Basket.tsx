import React, { useContext, useEffect, useState } from "react";
import './Basket.css';
import BasketCard from "../../components/BasketCard/BasketCard";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
    const [searchParams] = useSearchParams();
    const limit: string | null = (searchParams.get('limit') ? searchParams.get('limit') : '3');
    const navigate = useNavigate();
    const basketProducts = localStorage.getItem('basketProducts');
    const products: dataProps[] = basketProducts ? JSON.parse(basketProducts) : [];
    const uniqueProductsTwo: dataProps[] = [];

    localStorage.setItem('limit', JSON.stringify(limit));
    let localLimit = JSON.parse(localStorage.getItem('limit')!);

    const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
      localLimit = JSON.parse(localStorage.getItem('limit')!);
      e.currentTarget.value !== '' ? setPerPageInput(e.currentTarget.value !== '' ? e.currentTarget.value : '1') : setPerPageInput('');
      localLimit = 
      e.currentTarget.value === '' ? '1' 
      : Number(e.currentTarget.value) === 0 ? '1' 
      : e.currentTarget.value;
      navigate({pathname: '/basket', search: `?limit=${localLimit}`})
      localStorage.setItem('limit', localLimit);
    }

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

    
    // const [productsPerPage, setProductsPerPage] = useState(3);

    const [perPageInput, setPerPageInput] = useState('');
    let localCurrentPage = (JSON.parse(localStorage.getItem('currentPage')!) ? JSON.parse(localStorage.getItem('currentPage')!) : '3');
    const [currentPage, setCurrentPage] = useState(Number(localCurrentPage));

    const lastProductIndex = Number(localCurrentPage) * Number(limit);
    const firstProductIndex = lastProductIndex - Number(limit);
    const currentProducts = uniqueProductsTwo.length ? uniqueProductsTwo.slice(firstProductIndex, lastProductIndex) : [] ;

    useEffect(() => {
      if(!currentProducts.length) {
        localStorage.setItem('currentPage', JSON.stringify(Number(localCurrentPage) - 1));
        localCurrentPage = JSON.parse(localStorage.getItem('currentPage')!);
        setCurrentPage(Number(localCurrentPage));
      }
    }, [currentProducts])

    return (
      <div className="basket">
        <div className="basket__products">
          <div className="basket__products-pagination">
            <div className="basket__products-pagination-items">
              <p>Items</p>
              <input className="page-input" type="number" value={perPageInput} onChange={(e: React.FormEvent<HTMLInputElement>) => changeInput(e)} />
            </div>
            <BasketPagination totalProducts={uniqueProductsTwo.length} setCurrentPage={setCurrentPage} productsPerPage={Number(localLimit)} currentPage={currentPage} />
          </div>
          { products.length ?
            currentProducts.map((item: dataProps, index: number)  => 
              <Link to={'/catalog/' + item.id} key={item.id}>
                <BasketCard
                  id={item.id}
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