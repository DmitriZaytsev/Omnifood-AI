import View from "./Views.js";

class mobileNavView extends View {
  _btnNavEl = document.querySelector(".btn-mobile-nav");

  constructor() {
    super();
    this.addHandlerMobileNav();
  }

  addHandlerMobileNav() {
    this._btnNavEl.addEventListener("click", this.toggle);
  }
}
export default new mobileNavView;