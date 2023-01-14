import '@testing-library/react';

const prices: number[] = [100, 2000, 300, 1240, 200];

const priceFilter = (prices: number[]) => {
    return prices.filter((price: number) => price > 300);
};

const filteredArray = priceFilter(prices);

test('price-filter', () => {
    expect(filteredArray).toEqual([2000, 1240]);
});

const brands: string[] = ['Samsung', 'Xiaomi', 'LG', 'Apple'];

const sortByBrand = (brands: string[]) => {
    return brands.sort();
}

const sortedByBrands = sortByBrand(brands);

test('sorted-brands', () => {
    expect(sortedByBrands).toEqual(['Apple', 'LG', 'Samsung', 'Xiaomi']);
});

