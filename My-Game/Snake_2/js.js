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

let startTimestamp;
let stepsTaken = 0;
let score = 0;

constscoreElement = document.querySelector(".score");
const noteElemnt = document.querySelector("footer");

function main(timestamp) {
    try {
        if (startTimestamp == undefined) startTimestamp = timestamp;
        const totalElapsedTime = timestamp - startTimestamp;
        const stepsShouldHaveTaken = Math.floor(totalElapsedTime / speed);
    
        // If it's time to take a step 
        if (stepsTaken != stepsShouldHaveTaken) {
            step();
            stepsTaken++;

            //If the snake just step on an apple tile
            const headPosition = snakePositions[snakePositions.length - 1]
            if (headPosition == applePosition) {
                score++;
                scoreElement.innerText = score;

                addNewApple();
            }
        }
    
    window.requestAnimationFrame(main);
    } catch(error) {
        noteElemnt.innerHTML = `${error.message}. Press space to reset the game`;
    }
}
