import Page from "../../core/templates/page";
// главная страница

// extends  - создает дочерний класс, Page родительский класс, main page дочерний класс.
class MainPage extends Page {
  static TextObject = {
    MainTitle: "Тут приветственный контент",
  };
  // id - id каждой страинцы
  constructor(id: string) {
    // метод super вызывает конструктор родительского класса который записан в pages.ts и туда передается id страницы
    super(id);
  }
  //рендер возвращает Html элемент в нашу главную страницу
  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle); // вставили в контейнер заголовок который присвоили в maintitle
    this.container.prepend(title); //добавили title в конец контейнера
    return this.container;
  }
}

export default MainPage;
