import React from "react";

import "./BasketPagination.css";

type basketType = {
    totalProducts: number,
    productsPerPage: number,
    setCurrentPage: (page: number) => void,
    currentPage: number,
}

const BasketPagination = ({
    totalProducts,
    productsPerPage,
    setCurrentPage,
    currentPage
}: basketType) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default BasketPagination;