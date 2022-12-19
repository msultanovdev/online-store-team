import Page from "../../core/templates/page";

class CatalogPage extends Page {
  static TextObject = {
    MainTitle: "Страница с карточками",
  };
  // вызываем конструктор родительского класса. Шаблон конструктора в page.ts
  constructor(id: string) {
    super(id);
  }

  render() {
    // createHeaderTitle берем из нашего шаблона page
    const title = this.createHeaderTitle(CatalogPage.TextObject.MainTitle);
    this.container.append(title); // дабавили title в контейнер
    return this.container;
  }
}

export default CatalogPage;
