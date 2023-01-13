import React, { useEffect } from "react";

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
    const pages: number[] = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i);
    }

    const handlePage = (page: number) => {
        localStorage.setItem('currentPage', JSON.stringify(page));
    }

    return (
        <div data-testId="pagination-block" className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => {setCurrentPage(page); handlePage(page)}}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default BasketPagination;