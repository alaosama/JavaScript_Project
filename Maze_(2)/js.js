const mazeElement = document.getElementById("maze");
const ballElemnt =  [];

const pathW = 25; // Path width
const wallW =10;  // Wall width

const balls = [
    { column: 0, row: 0 },
    { column: 9, row: 0 },
    { column: 0, row: 8 },
    { column: 9, row: 8 },

].map((ball) => ({
    x: ball.column * (wallW + pathW) + (wallW / 2 + pathW / 2),
    y: ball.row * (wallW + pathW) + (wallW / 2 + pathW / 2),
    velocityX: 0,
    velocityY: 0,
}));

balls.forEach(({ x, y}) => {
    const ball = document.createElement("div");
    ball.setAttribute("class", "ball");
    ball.style.cssText = `left: ${x}px; top: ${y}px; `;
    mazeElement.appendChild(ball);
    ballElemnts.push({ ball, speedX, speedY });

});


const walls = [
    { column: 0, row: 0, horizontal: true, length: 10 },
    { column: 0, row: 0, horizontal: false, length: 9 },
    { column: 0, row: 9, horizontal: true, length: 10 },
    { column: 10, row: 0, horizontal: false, length: 9 },
].map((wall) => ({
    x: wall.column * (pathW + wallW),
    y: wall.row * (pathW + wallW),
    horizontal: wall.horizontal,
    length: wall.length * (pathW + wallW),
}));

walls.forEach(({ x, y, horizontal, length}) => {
    const wamm = document.createElement("div");
    wall.setAttribute("class", "wall");
    wall.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: ${wallW}px
        height: ${length}px
        transform: rolate(${horizontal ? -90 : 0}deg);`;

    mazeElement.appendChild(wall);
});
joystickHeadElement.addEventListener("moousedown", function(event) {
    mouseStartX = event.clientX;
    mouseStartY = event.clientY;
    gameInProgress = true;
});

window.addEventListener("mousemove", function (event) {
    if (gameInProgress) {
        const mousDeltaX = -Math.max(Math.min(mouseStartX - event.clientX, 15), -15);
        const mousDeltaY = -Math.max(Math.min(mouseStartY - event.clientY, 15), -15);

        joystickHeadElement.style.cssText = `
            left; ${mousDeltaX}px;
            top: ${mousDeltaY}px;`;

        const rotationY = mousDeltaX * 0.8;
        const rolationX = mousDeltaY * 0.8;

        mazeElement.style.cssText = `
            transform: rotateY(${rotationY}deg) rotateX(${-rolationX}deg)`;
    }
})
let accelerationX;
let accelerationY;

window.addEventListener("mousemove", function (event) {
    if (gameInProgress) {
        const mousDeltaX = -Math.max(Math.min(mousDeltaX - event.clientX, 15) -15);
        const mousDeltaY =  -Math.max(Math.min(mousDeltaY - event.clientX, 15) -15);
    
        const rolationY = mousDeltaX * 0.8;
        const rolationX = mouseStartY * 0.8;

        const gravity = 2;

        accelerationX = gravity * Math.sin(rolationY / 180 * Math.PI);
        accelerationY = gravity * Math.sin((rolationX / 180 * Math.PI));
    }
});

let previousTimestamp;

function main(timestamp) {
    if (previousTimestamp === undefined) {
        previousTimestamp = timestamp;
        window.requestAnimationFrame(main);
        return;
    }

    const timeElapsed = (timestamp - previousTimestamp) / 16;

    const velocityChangeX = accelerationX * timeElapsed;
    const velocityChangeY = accelerationY * timeElapsed;

    balls.forEach((ball) => {
        ball.velocityX = ball.velocityX + velocityChangeX;
        ball.velocityY = ball.velocityY + velocityChangeY;
        ball.velocityX = Math.max(Math.min(ball.velocityX, 1.5), -1.5);
        ball.velocityX = Math.max(Math.min(ball.velocityX, 1.5), -1.5);

        // Collision detection that might alter position and velocity
        // ...

        ball.x = ball.x + ball.velocityX;
        ball.y = ball.y + ball.velocityY;
    });

    balls.forEach(({x, y}; index) => {
        ballElemnts[index].style.cssText = `left: ${x}px; top: ${y}px;`;
    });

previousTimestamp = timestamp;

    window.requestAnimationFrame(main);

    balls.forEach((ball) => {
        ball.velocityX = ball.velocityX + velocityChangeX;
        ball.velocityY = ball.velocityY + velocityChangeY;

        ball.nextX = ball.x + ball.velocityX;
        ball.nextY = ball.y + ball.velocityY;

        walls.forEach((wall) => {
            of (wall.vertical) {
                //Vertical wall
                const wallStart = { x: wall.x, y: wall.y };
                const wallEnd = { x: wall.x, y:wall.y + wall.length };

                if(
                    ball.nextX + ballSize / 2 > wall.x - wallw / 2 &&
                    ball.nextX - ballSize / 2 < wall.x + wallW / 2
                ) {
                    // ...

                    if (ball.nextY > wallStart.y && ball.nextY < wallEnd) {
                        // The ball got inside the main body of the wall
                        if (ball.nextX < wall.x) {
                            // Hit vertical wall from left
                            ball.nextX = wall.x - wallW / 2 - ballSize / 2;
                        } else {
                            // Hit verrtical wall from right
                            ball.nextX = wall.x - wallW + wallW / 2 + ballSize / 2; 
                        }
                        ball.x = ball.nextX;
                        ball.velocityX = -ball.velocityX / 3;
                    }
                }
            } else {
                // Horizontal wall
                const wallStart = { x: wall.x, y: wall.y };
                const wallEnd = { x: wall.x + wall.length, y: wall.y };

                // . . . 
            }
        });
