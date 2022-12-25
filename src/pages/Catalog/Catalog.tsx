import React, { useState } from "react";
import "./Catalog.css";
import db from "../../assets/db.json";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import Categories from "../../components/Category-filter/Category-filter";

const Catalog = () => {
  const [data, setData] = useState(db.products);
  console.log(data);
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
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
                  <div className="brands__list-item">
                    <input type="checkbox" id="samsung" />
                    <label>Samsung</label>
                    <span>(0/1)</span>
                  </div>
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
                <div className="sort__bar">
                  <select name="" id="" className="sort__bar-list">
                    <option
                      value="sort-title"
                      disabled
                      selected
                      className="sort__bar-name"
                    >
                      Sort options:
                    </option>
                    <option value="price-ASC">Sort by price ASC</option>
                    <option value="price-DESC">Sort by price DESC</option>
                    <option value="rating-ASC">Sort by raiting ASC</option>
                    <option value="rating-DESC">Sort by raiting DESC</option>
                    <option value="discount-ASC">Sort by discount ASC</option>
                    <option value="discount-DESC">Sort by descount DESC</option>
                  </select>
                </div>
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
                        <Link key={item.id} to={"/catalog/" + item.id}>
                          <Card
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
                        </Link>
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
