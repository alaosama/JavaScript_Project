const pianokeys = document.querySelector(".piano-keys .key");


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
    key.add
});
