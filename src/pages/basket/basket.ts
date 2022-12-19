import Page from "../../core/templates/page";
class BasketPage extends Page {
  static TextObject = {
    MainTitle: "Страница корзины",
  };
  // метод super вызывает шаблон конструктора со страницы page.ts
  constructor(id: string) {
    super(id);
  }
  // рендерим это на страницу
  render() {
    const title = this.createHeaderTitle(BasketPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default BasketPage;
