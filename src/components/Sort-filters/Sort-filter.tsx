import React, { useState } from "react";

function SortOptions() {
  return (
    <div className="sort__bar">
      <select name="" id="" className="sort__bar-list">
        <option value="sort-title" disabled selected className="sort__bar-name">
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
  );
}

export default SortOptions;
