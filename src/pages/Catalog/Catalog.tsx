import React, { useContext, useEffect, useState } from "react";
import "./Catalog.css";
import db from "../../assets/db.json";
import Card from "../../components/Card/Card";
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

  const { totalPrice, setTotalPrice } = useContext(TotalContext);

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
    const total = JSON.parse(localStorage.getItem("total")!);
    setTotalPrice(total.price + object.price);
    localStorage.setItem(
      "total",
      JSON.stringify({
        count: total.count + 1,
        price: total.price + object.price,
      })
    );
    setTotalPrice(totalPrice + object.price);
    isAdded(object);
    basketProducts.push(object);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  };

  const removeFromCart = (object: dataProps) => {
    setTotalPrice(totalPrice - object.price);
    const isCounts =
      JSON.parse(localStorage.getItem("counts")!) !== null ? true : false;
    const counts = JSON.parse(localStorage.getItem("counts")!);
    const total = JSON.parse(localStorage.getItem("total")!);
    setTotalPrice(
      total.price - object.price * (isCounts ? counts[`${object.id}`] : 1)
    );
    localStorage.setItem(
      "total",
      JSON.stringify({
        count: total.count - 1,
        price:
          total.price - object.price * (isCounts ? counts[`${object.id}`] : 1),
      })
    );
    const indexOfObj = basketProducts.findIndex(
      (item: dataProps) => item.id === object.id
    );
    basketProducts
      .sort()
      .splice(indexOfObj, isCounts ? counts[`${object.id}`] : 1);
    localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
  };

  const data = db.products;
  const [searchValue, setSearchValue] = React.useState("");
  const onChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(event.target.value);
  };
  //filters
  //filters category

  const [category, setCategory] = useState("");
  const onChangecategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCategory(event.target.value);
  };

  const searchCategory = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mens-bags",
    "womens-jewelerry",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  //brand filters
  const brandCategory = [
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
    "Golden",
    "Furniture Bed Set",
    "Ratttan Outdoor",
    "Kitchen Shelf",
    "Multi Purpose",
    "AmnaMart",
    "Professional Wear",
    "Soft Cotton",
    "Top Sweater",
    "RED MICKY MOUSE..",
    "Digital Printed",
    "Ghazi Fabric",
    "IELGY",
    "IELGY fashion",
    "Synthetic Leather",
    "Sandals Flip Flops",
    "Maasai Sandals",
    "Arrivals Genuine",
    "Vintage Apparel",
    "FREE FIRE",
    "The Warehouse",
    "Sneakers",
    "Rubber",
    "Naviforce",
    "SKMEI 9117",
    "Strap Skeleton",
    "Stainless",
    "Eastern Watches",
    "Luxury Digital",
    "Watch Pearls",
    "Bracelet",
    "LouisWill",
    "Copenhagen Luxe",
    "Steal Frame",
  ];
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
              <div className="category">
                <div className="category">
                  {searchCategory.map((value, index) => (
                    <div className="category__checkbox" onClick={() => onChangecategory}>
                      <input
                        type="checkbox"
                        onChange={() => onChangecategory}
                      />
                      <label key={index}>{value}</label>
                      <span>(5/5)</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="brands">
                <div className="filters__block-title">Brand</div>
                <div className="brands__list">
                  <div className="brands__list-item">
                    {brandCategory.map((value, i) => (
                      <div key={i}>
                        <input type="checkbox" />
                        <label>{value}</label>
                        <span>(0/1)</span>
                      </div>
                    ))}
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
                        (data.category,
                        data.title,
                        data.description,
                        data.brand)
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
