const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let ballX = 200;
let ballY = 200;
let ballRadius = 50;
let ballVelocityX = 2;
let ballVelocityY = 2;

function gameUpdate() {
    
    ballX += ballVelocityX;
    ballY += ballVelocityY;
}

function gameDraw() {

    ctx.beginPath();
    ctx.art(ballX, ballY, 50, 0, Math.PI * 2);
    ctx.stroke();
}

function gameLoop() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);

    gameUpdate();
    gameDraw();
}

gameLoop();
