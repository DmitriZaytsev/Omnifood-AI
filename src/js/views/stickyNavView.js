class stickyNavView {
    _sectionHeroEl = document.querySelector(".section-hero");

    addStickyNav() {
       const obs = new IntersectionObserver(
            function (entries) {
                const ent = entries[0];

                if (ent.isIntersecting === false) {
                    document.body.classList.add("sticky");
                }

                if (ent.isIntersecting === true) {
                    document.body.classList.remove("sticky");
                }
            },
            {
                // In the viewport
                root: null,
                threshold: 0,
                rootMargin: "-80px",
            }
        );

        obs.observe(this._sectionHeroEl);
    }
}
export default new stickyNavView;