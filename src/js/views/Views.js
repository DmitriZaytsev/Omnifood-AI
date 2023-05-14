export default class View {

    toggle() {
        const _headerEl = document.querySelector(".header");

        _headerEl.classList.toggle("nav-open");
    }

}
