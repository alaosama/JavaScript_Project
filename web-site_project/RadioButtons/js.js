window.addEventListener ("DOMContentLoaded", () => {
    const c = new DroppingRadioButtons ("form");
});

class Dropp {
    optionID = 0;
    optionAAnim = null;
    optionBAnim = null;
    constructor(el) {
        this.el = document.querySelector(el);
        this.el.addEventListener("change", this.updateOption.bind(this));
    }
    updateOption(e) {
        const nextOption = +e.target.getAttribute("data-option");
        if (this.optionID !== null) {
            this.animateOption(this.optionID, nextOption);
        }
        this.optionID = nextOption;
    }
}
