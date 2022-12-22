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

    get cardThumbnail() {
        return this.getAttribute("cardThumbnail");
    }

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
            <div 
                style="
                    padding: 15px;
                    width: 300px; 
                    height: 450px;
                    border: 1px solid darkslategrey; 
                    border-radius: 15px;
                    margin: 5px;
                    " 
                >
                <h1 
                    style="
                    font-size: 20px; 
                    font-weight: 700; 
                    text-align: center;
                    margin-top: 0;
                    "
                >${this.cardTitle}</h1>
                <div style="width: 100%; height: 200px">
                    <img style="width: 100%; height: 100%; border-radius: 10px;" src="${this.cardThumbnail}" alt="${this.cardTitle}-image"/>
                </div>
                <div>
                    <div 
                        style="font-size: 16px"
                        class="card__content"
                    >
                        <p class="card__content-category">Category: <span style="font-weight: 900">${this.cardCategory}</span></p>
                        <p class="card__content-brand">Brand: <span style="font-weight: 900">${this.cardBrand}</span></p>
                        <p class="card__content-price">Price: <span style="font-weight: 900">${this.cardPrice}</span></p>
                        <p class="card__content-discount">Discount: <span style="font-weight: 900">${this.cardDiscount}</span></p>
                        <p class="card__content-rating">Rating: <span style="font-weight: 900">${this.cardRating}</span></p>
                        <p class="card__content-stock">Stock: <span style="font-weight: 900">${this.cardStock}</span></p>
                    </div>
                </div>
            </div>
        `
    }
}
