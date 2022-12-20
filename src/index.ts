import { Card } from "./components/Card/Card";
import "./style.css";
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
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

customElements.define('my-card', Card);
