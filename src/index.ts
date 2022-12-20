import "./style.css";
const route = (event: any) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/main.html",
  "/about": "/pages/catalog.html",
  "/lorem": "/pages/basket.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  const mainPage = document.getElementById("main-page") as HTMLElement;
  mainPage.innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
