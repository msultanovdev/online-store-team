export class Product {
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;

    constructor(title: string, description: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, category: string) {
        this.title = title
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
    }

    log(): void {
        console.log(`Product name: ${this.title}`);
    }
}