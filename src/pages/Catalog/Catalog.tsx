import React, { useContext } from "react";
import "./Catalog.css";
import db from "../../assets/db.json";
import Card from "../../components/Card/Card";
import Categories from "../../components/Category-filter/Category-filter";
import Brand from "../../components/Brand-filter/Brand-filter";
import SortOptions from "../../components/Sort-filters/Sort-filter";
import { TotalContext } from "../../totalContext";
import { ICountType } from "../../types";

const Catalog = () => {
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
    images: string[];
  };

  const {totalPrice, setTotalPrice} = useContext(TotalContext);

  const basketProducts = JSON.parse(
    localStorage.getItem("basketProducts") || `[]`
  );

  const isAdded = (item: dataProps) => {
    if (basketProducts.filter((obj: dataProps) => obj.id === item.id).length) {
      return true;
    }
    return false;
  };

  const addToCart = (object: dataProps) => {
    const total = JSON.parse(localStorage.getItem('total')!);
    setTotalPrice(total.price + object.price);
    localStorage.setItem('total', JSON.stringify({
      count: total.count + 1,
      price: total.price + object.price
    }));
    setTotalPrice(totalPrice + object.price);
    isAdded(object);
    basketProducts.push(object);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  };

  const removeFromCart = (object: dataProps) => {
    setTotalPrice(totalPrice - object.price);
    const isCounts = JSON.parse(localStorage.getItem('counts')!) !== null ? true : false;
    const counts = JSON.parse(localStorage.getItem('counts')!);
    const total = JSON.parse(localStorage.getItem('total')!);
    setTotalPrice(total.price - object.price * (isCounts ? counts[`${object.id}`] : 1));
    localStorage.setItem('total', JSON.stringify({
      count: total.count - 1,
      price: total.price - object.price * (isCounts ? counts[`${object.id}`] : 1)
    }));
    const indexOfObj = basketProducts.findIndex((item: dataProps) => item.id === object.id);
    basketProducts.sort().splice(indexOfObj, isCounts ? counts[`${object.id}`] : 1);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  };

  const data = db.products;
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="catalog">
      <div className="catalog-container align-center">
        <div className="main-page__catalog">
          <div className="catalog__content">
            <div className="filters__block">
              <div className="reset__block">
                <button className="reset__block-button">Reset Filters</button>
              </div>
              <div className="filters__block-title">Category</div>
              <Categories />
              <div className="brands">
                <div className="filters__block-title">Brand</div>
                <div className="brands__list">
                  <Brand />
                </div>
                <div className="price__block">
                  <div className="filters__block-title">Price</div>
                </div>
                <div className="stock__block">
                  <div className="filters__block-title">Stock</div>
                </div>
              </div>
            </div>
            <div className="cards__block">
              <div className="card__block-header">
                <div className="search__title">
                  {searchValue ? `Search by: "${searchValue}"` : "All products"}
                </div>
                <SortOptions />
                <div className="found__title">Found:1</div>
                <div className="search__block">
                  <input
                    type="search"
                    placeholder="Search form"
                    className="search__block-form"
                    onChange={onChangeSearchInput}
                    value={searchValue}
                  />
                  {searchValue && (
                    <div
                      className="search__block-delete_element"
                      onClick={() => setSearchValue("")}
                    >
                      &#10006;
                    </div>
                  )}
                </div>
                <div className="view__block">
                  {/* <div className="view__block-small">
                            <img src="../assets/free-icon-grid-lines-7375665.png" alt="ico-sort" className="img-big" />
                        </div>
                        <div className="view__block-big">
                            <img src="../assets/free-icon-grid-lines-8234032.png" alt="ico-sort" className="img-small" />
                        </div> */}
                </div>
              </div>
              <div className="cards__container">
                <div className="cards__container-card">
                  <div className="cards__content">
                    {data
                      .filter((data) =>
                        data.category
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      )
                      .map((item) => (
                        <Card
                          isAdded={() => isAdded(item)}
                          id={item.id}
                          key={item.id}
                          addToCart={() => addToCart(item)}
                          removeFromCart={() => removeFromCart(item)}
                          title={item.title}
                          thumbnail={item.thumbnail}
                          category={item.category}
                          brand={item.brand}
                          price={item.price}
                          discountPercentage={item.discountPercentage}
                          rating={item.rating}
                          stock={item.stock}
                          description={""}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
