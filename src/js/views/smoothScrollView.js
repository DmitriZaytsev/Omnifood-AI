import View from "./Views.js";

class smoothScrollView extends View {
  _allLinks = document.querySelectorAll("a:link");

  constructor() {
    super();
    this.activateSmoothScroll();
  }

  activateSmoothScroll() {
    this._allLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link")) {
          this.toggle();
        }
      });
    });
  }
}
export default new smoothScrollView;