const progressBarEl = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    let heigth = document.body.scrollHeigth - window.innerHeight;
    let scrollPosition = document.documentElement.scrollTop;
    let width = (scrollPosition / heigth) * 100;
    progressBarEl.style.width = `${width}%`;
});
