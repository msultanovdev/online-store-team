import { Card } from "./components/Card/Card";
import "./style.css";
import db from './assets/db.json';
const route = (event: Event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", (event.target as HTMLLinkElement).href);
  handleLocation();
};

type routesType = {
  "404": string,
  "/": string,
  "/about": string,
  "/lorem": string,
}

const routes: routesType = {
  "404": "/pages/404.html",
  "/": "/pages/main.html",
  "/about": "/pages/catalog.html",
  "/lorem": "/pages/basket.html",
};

const handleLocation = async () => {
  const path: string = window.location.pathname;
  const route = routes[path as keyof routesType] || routes["404"];
  const html = await fetch(route).then((data) => data.text());
  const mainPage = document.getElementById("main-page") as HTMLElement;
  mainPage.innerHTML = html;
  renderCards();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

customElements.define('my-card', Card);

const renderCards = async () => {
  const mainPageContent: any = document.querySelector('.main-page__content-menu')!;

  const cards = db.products.map(item => {
    return `<my-card 
        cardTitle="${item.title}"
        cardDiscount="${item.discountPercentage}%"
        cardPrice="${item.price}$"
        cardStock="${item.stock}"
        cardCategory="${item.category}"
        cardBrand="${item.brand}"
      ></my-card>`;
  });
  
  mainPageContent.innerHTML = cards;
  
  console.log(mainPageContent)
} 