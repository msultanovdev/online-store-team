// страница шаблона всех других страниц
abstract class Page {
  protected container: HTMLElement; // это основной контейнер по типу main page, catalog-page.
  static TextObject = {};

  constructor(id: string) {
    // такой же как и у main page
    this.container = document.createElement("div");
    this.container.id = id;
  }
  //т.к header title приватный метод чтобы его получать в других метсах используем protected
  protected createHeaderTitle(text: string) {
    //функция которая выводит заголовок
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    //добавляет контейнер на страницу
    return this.container;
  }
}

export default Page;
