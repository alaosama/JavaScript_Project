let focusButton = document.getElementById("focus");
let buttons = document.getElementById(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");

let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");

let time = document.getElementById("time");
let set;
let count = 59;
let paused= true;
let moinCount = 24;
time.textContent = `${minCount + 1}:00`;

const apprendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};

reset.addEventListener(
    "click",
    (resetTime = () => {
        pauseTimer();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount + 1}:00`;
    })
);
