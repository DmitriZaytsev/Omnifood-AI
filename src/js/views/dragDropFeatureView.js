class dragDropView {
    _widgetStart = document.querySelector('.widget-start');
    _widgetEnd = document.querySelector('.widget-end');
    _widgetRollup = document.querySelector('.widget-end--rollup');
    _delWidget = document.querySelector('.del-widget');

    #startX = 0;
    #startY = 0;
    #dragging = false;

    _toggleFunction = function () {
        this._widgetStart.classList.toggle('open-widget');
        this._widgetEnd.classList.toggle('open-widget');
        this._delWidget.classList.toggle('open-widget');
    }

    addHandlerOpenWIdget() {
        this._widgetStart.addEventListener('click', this._toggleFunction.bind(this));
        this._widgetRollup.addEventListener('click', this._toggleFunction.bind(this));
    }

    addHandlerMouseEvents() {
        this._widgetEnd.addEventListener('mousedown', (e) =>{
            e.preventDefault();
            this.#dragging = true;
            const style = window.getComputedStyle(this._widgetEnd);
            const transform = new DOMMatrixReadOnly(style.transform)

            const translateX = transform.m41
            const translateY = transform.m42

            this.#startX = e.pageX - translateX
            this.#startY = e.pageY - translateY

        });

        document.body.addEventListener('mousemove', (e) => {
            if (!this.#dragging) return

            const x = e.pageX - this.#startX;
            const y = e.pageY - this.#startY;

            this._widgetEnd.style.transform = `translate(${x}px, ${y}px)`;

            this._widgetEnd.style.pointerEvents = 'none';
            let elBelow = document.elementFromPoint(e.clientX, e.clientY);
            this._widgetEnd.style.pointerEvents = 'auto';

            if (!elBelow) return;
            const dropZone = elBelow.closest('.drop');
            if (dropZone === document.querySelector('.drop')) {
                this._delWidget.classList.add('dropzone');
            }

            if (!dropZone) this._delWidget.classList.remove('dropzone');

        });

        this._widgetEnd.addEventListener("mouseup", (e) => {
            this._widgetEnd.style.pointerEvents = 'none';
            let elBelow = document.elementFromPoint(e.clientX, e.clientY);
            this._widgetEnd.style.pointerEvents = 'auto';

            this.#dragging = false;
            const dropZone = elBelow.closest('.drop');

            if ((dropZone === document.querySelector('.drop'))) {
                this._widgetEnd.style.cursor = 'wait';
                document.documentElement.setAttribute('style', 'cursor: wait');

                //Use setTimeout for removing elements at the same time. In oter case, remove only one element.
                setTimeout(() => {
                    this._delWidget.classList.add('before-remove');
                    setTimeout(() => {
                        this._widgetEnd.remove();
                        this._delWidget.remove();
                        document.documentElement.style.cursor = 'default';

                    }, 1500);
                }, 500);

            }
        });
    }
    //Cancel default browsers's function 
    cancelDefaultBehavior() {
        this._widgetEnd.ondragstart = function () {
            return false;
        };
    }

}

export default new dragDropView;