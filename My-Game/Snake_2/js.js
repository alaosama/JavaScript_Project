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

window.requestAnimationFrame(main);

function step() {
    // Calculate the next position and add it to the snake

    const newHeadPosition = getNextPosition();
    snakePositions.push(newHeadPosition);

    // Drop tail
    if(newHeadPosition != applePosition) {
        const previousTail = tiles[snakePositions[0]];
        previousTail.style.backgroundColor = "transparent";
        snakePositions.shift();
    }

    // Draw new head
    const head = tiles[newHeadPosition];
    head.style.backgroundColor = "black";
}


let inputs = [];

function getNextPosition() {
    const headPosition = snakePositions[snakePositions.length -1];
    const snakeDirection = inputs.shift() || snakeDirection();
    switch(snakeDirection) {
        case "right": {
            const nextPosition = headPosition + 1;
            if (nextPosition % width == 0) throw Error("The snake hit the wall");
            if (snakePositions.includes(nextPosition)) throw Error("the snake bit itself");
            return nextPosition;
        }
        case "left": {
            const nextPosition = headPosition - 1;
            if (nextPosition % width == width - 1 || nextPosition < 0) throw Error("The snake hit the wall");
            if (snakePositions.includes(nextPosition)) throw Error("The snake bit itself")
            return nextPosition;
        }
        case "down": {
            const nextPosition = headPosition + width;
            if (nextPosition > width * height - 1) throw Error("The snake hit the wall");
            if (snakePositions.includes(nextPosition)) throw Error("The snake bit itself")
            return nextPosition;
        }
        case "up": {
            const nextPosition = headPosition - width;
            if (nextPosition < 0) throw Error("The snake hit the wall");
            if (snakePositions.includes(nextPosition)) throw Error("The snake bit itself")
            return nextPosition;
        }
    }
}

const headPosition = snakePositions[0];
const snakeHead = tiles[headPosition];

if (direction == "right")
    snakeHead.style.cssText = `left: 0; width: ${percentage}%, background-color: black;`;

if (direction == "left")
    snakeHead.style.cssText = `right: 0; width: ${percentage}%, background-color: black;`;

if (direction == "down")
    snakeHead.style.cssText = `top: 0; height: ${percentage}%, background-color: black;`;

if (direction == "up")
    snakeHead.style.cssText = `bottom: 0; height: ${percentage}%, background-color: black;`;

for (const i of snakePositions.slice(1, -1)) {
    const snakeBody = tiles[i];
    snakeBody.style.cssText = `background-color: black;`;
}


if (direction == "right")
    setTile(snakeHead, {
    left: 0,
    width: `${percentage}%`,
    "background-color": color,
});
