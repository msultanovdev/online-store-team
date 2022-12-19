import Component from "../../templates/components";
class Footer extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderFooterLink() {
    const headerLink = document.createElement("div");
    const studentLinkOne = document.createElement("a");
    const studentLinkTwo = document.createElement("a");
    const rsLogo = document.createElement("img");
    studentLinkOne.href = `https://github.com/KasyanovskayaKristina`;
    rsLogo.src = `https://rs.school/images/rs_school_js.svg`;
    studentLinkTwo.href = `https://github.com/msultanovdev`;
    studentLinkOne.innerText = `Kristina Kasyanovskaya`;
    studentLinkTwo.innerText = `Mukhammadamin`;
    headerLink.append(studentLinkOne, rsLogo, studentLinkTwo);
    this.container.append(headerLink);
  }

  render() {
    this.renderFooterLink();
    return this.container;
  }
}

export default Footer;
