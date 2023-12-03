const pianokeys = document.querySelector(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider inpu");
keysCheckbox = document.querySelector(".keys-chechbox input");

let audio = new Audio("");

const playTune = (key) => {
    audio.src = `${key}`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
};

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dateset.key));
});

const presseKey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}

document.addEventListener("keydown", presseKey);
