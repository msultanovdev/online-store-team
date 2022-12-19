import Page from "../../core/templates/page";
import MainPage from "../main/main";
import CatalogPage from "../catalog/catalog";
import BasketPage from "../basket/basket";
import ErrorPage, { ErrorTypes } from "../error/error";
import Header from "../../core/components/header/header";
import Footer from "../../core/components/footer/footer";
export const enum PageIds {
  MainPage = "main-page",
  CatalogPage = "catalog-page",
  BasketPage = "basket-page",
}

class App {
  private header: Header;
  private static container: HTMLElement = document.body; //контейнер HTMLElement - любой элемент html на странице
  private static defaultPageId: string = "current-page";
  private footer: Footer;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.CatalogPage) {
      page = new CatalogPage(idPage);
    } else if (idPage === PageIds.BasketPage) {
      page = new BasketPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  // добавляем элементы внутри контейнера бади
  constructor() {
    this.header = new Header("header", "header-container");
    this.footer = new Footer("footer", "footer-container");
  }

  run() {
    //метод run запускает весь проект + добавляет информацию в дом
    App.container.append(this.header.render());
    App.renderNewPage("main-page");
    App.container.append(this.footer.render());
    this.enableRouteChange();
  }
}

// Main, Catalog, Busket

export default App;
