import React, { useState } from "react";
import db from "../../assets/db.json";


function Categories() {
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
    "automotive",
    "motorcycle",
    "lighting",
  ];
  return (
    <div className="category">
      {searchCategory.map((value, i) => (
        <div className="category__checkbox">
          <input key={i} type="checkbox" />
          <label>{value}</label>
          <span>(5/5)</span>
        </div>
      ))}
    </div>
  );
}

export default Categories;
