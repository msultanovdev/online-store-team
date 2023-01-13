import { render, screen } from "@testing-library/react";
import BasketPagination from './BasketPagination';

test('total-products-pagination', () => {
    render(<BasketPagination totalProducts={0} productsPerPage={0} setCurrentPage={function (page: number): void {
        throw new Error("Function not implemented.");
    } } currentPage={0} />);
    const productsCount = screen.getByTestId('pagination-block').childNodes.length;
    expect(productsCount).toBe(0);
});

test('pages-pagination', () => {
    render(<BasketPagination totalProducts={6} productsPerPage={3} setCurrentPage={function (page: number): void {
        throw new Error("Function not implemented.");
    } } currentPage={0} />);
    const productsCount = screen.getByTestId('pagination-block').childNodes.length;
    expect(productsCount).toBe(2);
});