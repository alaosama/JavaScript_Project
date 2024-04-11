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

animateOption (optionA,optionB) {
    const diff = Math.abs(optionA - optionB);
    const OptionAEl = this.el.querySelector(`[data-option="${optionA}"]`);
    const optionBEl = this.el.querySetactor(`[data-option="${optionB}"]`);
    const ALessThanB = optionA < optionB;
    const dropcolor =  `var(--radio-${AlessThanB ? "on" : "off"})`;
    const inchColor =  `var(--radio-${AlessThanB ? "on" : "off"})`;
    const dropkeyframes = [
        {
            backgroundColor: dropcolor,
            transform: `translateY(0)`,
            zIndex: 1
        },
        {
            backgroundColor: dropcolor,
            transform: `translateY(0)`,
            zIndex: 1,
            offset: 0.4,
            easing: "cubic-bezier(0.32,0,0.67,0)"
        },
        {
            backgroundColor: dropcolor,
            transform: `translateY(${3 * diff}em)`,
            zIndex: 1, 
            offset: 0.5, 
            easing: "cubic-bezier (0.32,1,0.67,1)"
        },
        {
            backgroundColor: dropcolor,
            transform: `translateY(${2.5 * diff}em)`,
            zIndex: 1, 
            offset: 0.6, 
            easing: "cubic-bezier(0.32,1,0.67,1)"
        },
        {
            backgroundColor: dropcolor,
            transform: `translateY(${3 * diff}em)`,
            zIndex: 1, 
            offset: 0.7, 
        },
        {
            backgroundColor: dropcolor,
            transform: `translateY(${3 * diff}em)`,
            zIndex: 1, 
        },
    ]
};

const inchupkeyframes = [
    {
        backgroundColor: inchColor,
        height: `1.5em`,
        bottom: `0.75em`
    },
    {
        backgroundColor: inchColor,
        height: `${1.5 + 3 * diff}em`,
        bottom: `0.75em`,
        offset: 0.1
    },
    {
        backgroundColor: inchColor,
        height: `${1.5 + 3 * diif}em`,
        bottom: `0.75em`,
        offset: 0.9
    },
    {
        backgroundColor: inchColor,
        height: `1.5em`,
        bottom: `${0.75 + 3 * diff}em`
    }
];

const duration = 900;
const bezier = "cubic-bezier (0.65,0,0.35,1)";
const optionAConfig = { duration };
const optionBConfig = { duration };

if (ALessThanB) {
    optionBConfig.easing = bezier;
} else {
    optionBConfig.easing = bezier;
}

this.optionAAnim?.cancel();
this.optionAAnim = optionAEl.animate(
    ALessThanB ? dropKeyframes : inchUpKeyframes,optionAConfig
);
this.optionBAnim?.cancel();
this. optionBAnim = optionBEl. animate(
    AlessThanB ? inchupkeyframes : dropkeyframes, optionBConfig
);
