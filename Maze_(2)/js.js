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
