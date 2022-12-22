type stringOrNull = string | null;

export class Card extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"})
    }

    get cardTitle() {
        return this.getAttribute("cardTitle");
    }

    // set cardTitle(val: stringOrNull) {
    //     this.setAttribute("cardTitle", val);
    // }

    get cardCategory() {
        return this.getAttribute("cardCategory");
    }

    // set cardCategory(val: stringOrNull) {
    //     this.setAttribute("cardCategory", val);
    // }

    get cardPrice() {
        return this.getAttribute("cardPrice");
    }

    // set cardPrice(val: stringOrNull) {
    //     this.setAttribute("cardPrice", val);
    // }

    get cardDiscount() {
        return this.getAttribute("cardDiscount");
    }

    // set cardDiscount(val: stringOrNull) {
    //     this.setAttribute("cardDiscount", val);
    // }

    get cardRating() {
        return this.getAttribute("cardRating");
    }

    // set cardRating(val: stringOrNull) {
    //     this.setAttribute("cardRating", val);
    // }

    get cardStock() {
        return this.getAttribute("cardStock");
    }

    // set cardStock(val: stringOrNull) {
    //     this.setAttribute("cardStock", val);
    // }

    get cardBrand() {
        return this.getAttribute("cardBrand");
    }

    // set cardBrand(val: stringOrNull) {
    //     this.setAttribute("cardBrand", val);
    // }

    static get observedAttributes() {
        return ["cardTitle"];
    }

    attributeChangedCallback(prop: string) {
        if(prop === "cardTitle") this.render();
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <div class="card">
                <h1 class="card-title">${this.cardTitle}</h1>
                <div class="card__content">
                    <p class="card__content-category">Category: <span>${this.cardCategory}</span></p>
                    <p class="card__content-brand">Brand: <span>${this.cardBrand}</span></p>
                    <p class="card__content-price">Price: <span>${this.cardPrice}</span></p>
                    <p class="card__content-discount">Discount: <span>${this.cardDiscount}</span></p>
                    <p class="card__content-rating">Rating: <span>${this.cardRating}</span></p>
                    <p class="card__content-stock">Stock: <span>${this.cardStock}</span></p>
                </div>
            </div>
        `
    }
}
