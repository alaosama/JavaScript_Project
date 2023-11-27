let snakerPositions = [168, 169, 178, 171];
let applePosition = 100;

                            // Get a reference to all the tiles
const tiles =  document.querySelector(".grid .title");

                            // Render apple
const appleTile = tiles[applePosition]
appleTile.style.cssText = ` background-color: black
                            border-radius: 50%;`

                            // Render snake
for (const i of snakerPositions){
    const snakerPart = tiles[i];
    snakerPart.style.backgroundColor = "black";
}

let inputs = [];

window.addEventListener("keydown", function(event) {
    if(!["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown",].includes(event.key)) 
        return;

    event.preventDefault();

    if(event.key == "ArrowLeft") {
        inputs.push("left");
        return;
    }
    if(event.key == "ArrowUp") {
        inputs.push("up");
        return;
    }
    if (event.key == "ArrowRight") {
        inputs.push("right");
        return
    }
    if(event.key == "ArrowDown") {
        inputs.push("down");
        return
    }
});
