const pianokeys = document.querySelector(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider inpu");
keysCheckbox = document.querySelector(".keys-chechbox input");

let audio = new Audio("");
audio = new Audio("");

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

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dateset.key));
});

const showHideKeys = (e) => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const presseKey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", )
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", presseKey);
